import axios from 'axios'


const LIBRARY_API_BASE_URL = "http://localhost:8080/api/lib";

class LibraryServices{
    getLibrary(){
        return axios.get(LIBRARY_API_BASE_URL);
    }
}

export default new LibraryServices(); 