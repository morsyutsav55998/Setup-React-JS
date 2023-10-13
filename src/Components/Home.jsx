import {React,useState ,useEffect} from 'react'
import axios from 'axios';
function Home() {
    const [name, setName] = useState('')
    const [multiple_files, setFile] = useState([])

    // onSubmit
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post("http://localhost:8000/postdata", { name: name })
            .then((responce) => {
                console.log(responce.data);
            }).catch((err) => {
                console.log(err);
            })
    }
    const handleFileChange = () =>{
        
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>Name</label>
                <br/>
                <input type="text" name='name' value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
                <br/>
                <br/>
                <input type="file" name='image' onChange={handleFileChange} multiple />
                <br/>
                <br/>

                <button type='submit'>Submit</button>
            </form>
        </>
    );
}

export default Home;
