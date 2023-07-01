import UseEffectWithCleanup from './useEffectWithCleanup'

const CleanupuseEffect = () => {
  // console.log(VITE_MOVIE_API)
  return (
    <div className="layout flex flex-wrap justify-evenly flex-row">
      <div className="with-cleanup">
        <UseEffectWithCleanup />
      </div>
    </div>
  )
}

export default CleanupuseEffect
