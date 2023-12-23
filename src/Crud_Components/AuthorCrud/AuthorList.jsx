import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser, setLoading, setUsers } from '../../reducers/AuthorSlicer';
import axios from 'axios';
import { RingLoader } from 'react-spinners';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import './author.css'

const AuthorList = () => {

    let dispatch = useDispatch();
    const data = useSelector((state) => state.app)

    const closemeg = (name) => toast(`${name} is deleted`, { type: toast.TYPE.WARNING, autoClose: 1000 });


    useEffect(() => {
        //getting data from mock api get method
        const getData = async () => {
            try {
                dispatch(setLoading());
                const authorlist = await axios.get("https://65571300bd4bcef8b611ff00.mockapi.io/product/users")
                dispatch(setUsers(authorlist.data))
            } catch (error) {
                console.log(error);
            }
        }
            getData()

    }, []);

    //delete user data funtion
    async function deleteData(id, name) {
        try {
            await axios.delete(`https://65571300bd4bcef8b611ff00.mockapi.io/product/users/${id}`)
            closemeg(name);
            dispatch(deleteUser(id))
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <div className=" books-lists">
                Author List
            </div>
            <div className="card shadow mb-4">
                <div className="card-body">
                    {
                        data.loading ?
                            <RingLoader color="blue" className="text-center " />
                            : (
                                <div className="table-responsive">
                                    {Array.isArray(data.author) && data.author.length > 0 ? (
                                        <table className="table table-bordered author-table" id="dataTable" width="100%" cellspacing="0">
                                            <thead className='table-light'>
                                                <tr>
                                                    <th>No</th>
                                                    <th>Name</th>
                                                    <th>DATE OF BIRTH</th>
                                                    <th>BIOGRAPHOY</th>
                                                    <th>ACTION</th>
                                                </tr>
                                            </thead>
                                            <tfoot className='table-light'>
                                                <tr>
                                                    <th>No</th>
                                                    <th>Name</th>
                                                    <th>DATE OF BIRTH</th>
                                                    <th>BIOGRAPHOY</th>
                                                    <th>ACTION</th>
                                                </tr>
                                            </tfoot>
                                            <tbody>

                                                {data.author.map((user, index) => {
                                                    return <tr key={index}>
                                                        <td>{index + 1}</td>
                                                        <td>{user.name}</td>
                                                        <td>{user.dob}</td>
                                                        <td>{user.bio}</td>

                                                        <td className='action d-flex'>
                                                            <Link to={`/portal/view-author/${user.id}`} className='btn btn-sm btn-info ms-3'>view</Link>
                                                            <Link to={`/portal/edit-author/${user.id}`} className='btn btn-sm btn-warning ms-3' >Edit</Link>
                                                            <button onClick={() => deleteData(user.id, user.name)} className='btn btn-sm btn-danger ms-3' >delete</button>
                                                        </td>
                                                    </tr>
                                                })}
                                            </tbody>
                                        </table>
                                    ) : (
                                        <p className="text-center">No user data available</p>
                                    )}

                                </div>
                            )
                    }
                </div>
            </div>
        </>
    )
}

export default AuthorList