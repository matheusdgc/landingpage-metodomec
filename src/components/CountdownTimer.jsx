import { useState, useEffect } from 'react'
import { Clock, Bell } from 'lucide-react'
import { ENROLLMENT_DEADLINE, getWhatsAppUrl, WHATSAPP_WAITLIST_MESSAGE } from '../config'

const calculateTimeLeft = () => {
  const difference = ENROLLMENT_DEADLINE - new Date()

  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, expired: true }
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / 1000 / 60) % 60),
    seconds: Math.floor((difference / 1000) % 60),
    expired: false,
  }
}

const TimeUnit = ({ value, label }) => (
  <div className="flex flex-col items-center">
    <div className="bg-brown-700/80 backdrop-blur-sm text-sand-50 rounded-lg px-2 sm:px-3 py-2 min-w-[44px] sm:min-w-[52px] text-center">
      <span className="font-display text-xl sm:text-2xl font-bold leading-none tabular-nums">
        {String(value).padStart(2, '0')}
      </span>
    </div>
    <span className="text-sand-100 text-xs mt-1 font-body">{label}</span>
  </div>
)

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft)

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  if (timeLeft.expired) {
    return (
      <div className="flex flex-col items-center space-y-3 text-sand-50">
        <div className="flex items-center space-x-2">
          <Clock className="w-4 h-4" />
          <span className="font-body font-medium text-sm">Inscrições encerradas</span>
        </div>
        <a
          href={getWhatsAppUrl(WHATSAPP_WAITLIST_MESSAGE)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-2 bg-sand-50/20 hover:bg-sand-50/30 transition-colors rounded-full px-4 py-2 text-sm font-body font-semibold"
        >
          <Bell className="w-4 h-4" />
          <span>Entrar na lista de espera →</span>
        </a>
      </div>
    )
  }

  return (
    <div className="flex flex-col items-center space-y-3">
      <div className="flex items-center space-x-2 text-sand-50">
        <Clock className="w-4 h-4 animate-pulse" />
        <span className="font-body font-semibold text-sm uppercase tracking-wide">
          Inscrições encerram em:
        </span>
      </div>

      <div className="flex items-end space-x-3">
        <TimeUnit value={timeLeft.days} label="dias" />
        <span className="text-sand-100 font-bold text-lg sm:text-xl mb-5">:</span>
        <TimeUnit value={timeLeft.hours} label="horas" />
        <span className="text-sand-100 font-bold text-lg sm:text-xl mb-5">:</span>
        <TimeUnit value={timeLeft.minutes} label="min" />
        <span className="text-sand-100 font-bold text-lg sm:text-xl mb-5">:</span>
        <TimeUnit value={timeLeft.seconds} label="seg" />
      </div>
    </div>
  )
}

export default CountdownTimer
