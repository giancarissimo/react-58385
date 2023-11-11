import { RotatingLines } from  'react-loader-spinner'

const Loader = () => {
    return (
        <section className="loader_container">
            <RotatingLines strokeColor="black" strokeWidth="3.5" animationDuration=".55" width="35" visible={true} />
        </section>
    )
}

export default Loader