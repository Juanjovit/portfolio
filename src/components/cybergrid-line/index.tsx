import { useState, useEffect, useMemo } from 'react'
import { useAtomValue } from 'jotai'
import { siteStatusAtom } from '../../atoms/atoms'

interface CybergridLineProps {
  className: string
  hasShadow?: boolean
  invertColors?: boolean
}

interface RGB {
  r: number
  g: number
  b: number
}

const parseRGB = (rgb: string): RGB => {
  const parts = rgb.match(/\d+/g)?.map(Number)
  return {
    r: parts ? parts[0] : 0,
    g: parts ? parts[1] : 0,
    b: parts ? parts[2] : 0,
  }
}

const interpolateValue = (start: number, end: number, factor: number): number =>
  Math.round(start + (end - start) * factor)

const interpolateColor = (start: string, end: string): string => {
  const startRGB = parseRGB(start)
  const endRGB = parseRGB(end)
  const factor = 0.1
  const interpolated = {
    r: interpolateValue(startRGB.r, endRGB.r, factor),
    g: interpolateValue(startRGB.g, endRGB.g, factor),
    b: interpolateValue(startRGB.b, endRGB.b, factor),
  }
  return `rgb(${interpolated.r}, ${interpolated.g}, ${interpolated.b})`
}

export const CybergridLine: React.FC<CybergridLineProps> = ({
  className,
  hasShadow,
  invertColors,
}) => {
  const siteStatus = useAtomValue(siteStatusAtom)
  const [gradient, setGradient] = useState({
    color1: 'rgb(0, 131, 254)',
    color2: 'rgb(27, 243, 205)',
  })

  const colors = useMemo(
    () => ({
      neutral: ['rgb(0, 131, 254)', 'rgb(27, 243, 205)'],
      success: ['rgb(50, 205, 50)', 'rgb(0, 128, 0)'],
      error: ['rgb(251, 200, 41)', 'rgb(227, 46, 3)'],
    }),
    [],
  )

  useEffect(() => {
    const [color1, color2] = colors[siteStatus] || colors['neutral']
    const interval = setInterval(() => {
      setGradient((prevGradient) => ({
        color1: interpolateColor(prevGradient.color1, color1),
        color2: interpolateColor(prevGradient.color2, color2),
      }))
    }, 15)

    return () => {
      clearInterval(interval)
    }
  }, [siteStatus, colors])

  const color1 = invertColors ? gradient.color2 : gradient.color1
  const color2 = invertColors ? gradient.color1 : gradient.color2

  return (
    <div
      className={className}
      style={{
        backgroundImage: `linear-gradient(to bottom, ${color1}, ${color2})`,
        boxShadow: hasShadow
          ? `0 0px 15px ${color1}, 0 0px 15px ${color2}`
          : 'none',
      }}
    ></div>
  )
}
