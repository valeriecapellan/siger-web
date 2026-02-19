import { useNavigate } from 'react-router-dom'
import './BackButton.css'

interface BackButtonProps {
  to?: string
}

function BackButton({ to = '/admin' }: BackButtonProps) {
  const navigate = useNavigate()

  const handleClick = () => {
    if (to === 'back') {
      navigate(-1)
    } else {
      navigate(to)
    }
  }

  return (
    <div className="back-button-container">
      <button className="back-button" onClick={handleClick}>
        <span className="back-button-icon">←</span>
        Volver
      </button>
    </div>
  )
}

export default BackButton
