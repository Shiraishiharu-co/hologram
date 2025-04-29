console.clear()

const CARD = document.querySelector('.card-wrapper')

const UPDATE = ({ x, y }) => {
  const BOUNDS = CARD.getBoundingClientRect()
  const pointerX = x - BOUNDS.x
  const pointerY = y - BOUNDS.y
  const ratioX = pointerX / BOUNDS.width
  const ratioY = pointerY / BOUNDS.height
  CARD.style.setProperty('--ratiox', ratioX)
  CARD.style.setProperty('--ratioy', ratioY)
  
  const mX = ratioX * 100
  const mY = ratioY * 100
  CARD.style.setProperty('--mx', `${mX}%`)
  CARD.style.setProperty('--my', `${mY}%`)
  
  const rX = (ratioX - 0.5) * -30
  const rY = (ratioY - 0.5) * 50
  CARD.style.setProperty('--rx', `${rX}deg`)
  CARD.style.setProperty('--ry', `${rY}deg`)
  
  const posX = 50 + (ratioX - 0.5) * 28
  const posY = 50 + (ratioY - 0.5) * 28
  CARD.style.setProperty('--pos', `${posX}% ${posY}%`)
  CARD.style.setProperty('--posx', `${posX}%`)
  CARD.style.setProperty('--posy', `${posY}%`)
  
  const hyp = Math.sqrt( Math.pow( ratioX - 0.5, 2 ) + Math.pow( ratioY - 0.5, 2 )) * 10 / 7;
  CARD.style.setProperty('--hyp', hyp) 
}

document.body.addEventListener('pointermove', UPDATE)





Resources