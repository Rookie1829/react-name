import "./styles.css"
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Home() {
    return (
        <>
        <h1>Home Page</h1>
        <header>
            <div className="row">
                <div className="logo-row">
                    <img src={require('./images/logo.png')} />
                </div>
            </div>
        </header>
        </>

)
}