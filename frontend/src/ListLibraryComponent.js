import LibraryServices from './LibraryServices'
import React,{ Component } from 'react';



class ListLibraryComponent extends Component {
    constructor(){
        super();
        this.state={
            librarys :[]
        }
        
    }
    
    componentDidMount(){
        LibraryServices.getLibrary().then((res)=>
        {
            this.setState({librarys: res.data})
        })
    }

    render() {
        return (
            <div>
                <h2 className="text-center">LIBRARY MANAGEMENT</h2>
                <div className="box">
                    <table className= "table table-striped table-bordered">
                        <tbody>
                            <tr><th>Book Id</th>
                                <th>Book Title</th>
                                <th>Author Name</th>
                                <th>Publisher</th>
                                <th>Book Availability</th>
                            </tr>
                        </tbody>
                        <tbody>
                            {
                                this.state.librarys.map(
                                    librarys=>
                                    <tr key={librarys.id} >
                                        <td>{librarys.id}</td>
                                        <td>{librarys.bookTitle}</td>
                                        <td>{librarys.authorName}</td>
                                        <td>{librarys.publisher}</td>
                                        <td>{librarys.availability}</td>

                                 </tr>
        
                                )
                                }
                        </tbody>

                    </table>
                </div>
            </div>
        );
    }
}

export default ListLibraryComponent;

 