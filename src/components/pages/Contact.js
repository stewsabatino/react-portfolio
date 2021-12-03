import { useState } from "react"


const form = {
    width: 500,
    height: 300,
}
const section = {
    height: "100vh",
}





export default function Contact() {
    const [formData, setFormData] = useState({})

    const handleEmail = (event) => {
        event.preventDefault();
        console.log(formData)
        window.location.href = `mailto:stewsabatino@gmail.com?subject=${formData.fullName}&body=${formData.comment}`
    }


    return (
            <div className="container justify-content-center border" style={form}>
                <h1 className="text-center">Contact me</h1>
                <div className="form-floating mb-3">
                    <input type="text" value={formData.fullName} className="form-control" id="floatingInput" placeholder="name@example.com" 
                    onChange={(event) => setFormData({...formData, fullName: event.target.value})} />
                    <label for="floatingInput">Name</label>
                </div>
                <div className="form-floating">
                    <textarea className="form-control" value={formData.comment} placeholder="Leave a comment here" id="floatingTextarea2" onChange={(event) => setFormData({...formData, comment: event.target.value})}></textarea>
                    <label for="floatingTextarea2">Comments</label>
                </div>
                <button onClick={handleEmail} className="btn btn-block btn-squared btn-dark text-light mt-3">
                    send email
                </button>
            </div>
    );
}