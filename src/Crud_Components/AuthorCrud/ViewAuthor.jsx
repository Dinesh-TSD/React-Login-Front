import React, { useEffect } from "react";
import { setUsers } from "../../reducers/AuthorSlicer";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { RingLoader } from "react-spinners";

const ViewAuthor = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const { author, loading } = useSelector((state) => state.app);

  useEffect(() => {
    let fetchData = async () => {
      let employee = await axios.get(
        `https://65571300bd4bcef8b611ff00.mockapi.io/product/users/${params.id}`
      );
      dispatch(setUsers(employee.data));
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="container min-vh-100 p-0">
        <div className="row justify-content-center align-content-center mt-5">
          <div className="  col-sm-12">
            <div className="card text-center shadow">
              <div className="card-header h3">Author Details</div>
              <div className="card-body d-flex justify-content-center">
                {loading ? (
                  <RingLoader color="blue" />
                ) : (
                  <div className="table-responsive view mx-lg-5">
                    <table className="table table-bordered table-striped">
                      <tbody>
                        <tr>
                          <td className="text-end">Name</td>
                          <td className="">{author.name}</td>
                        </tr>
                        <tr>
                          <td className="text-end">DOB</td>
                          <td className="">{author.dob}</td>
                        </tr>
                        <tr>
                          <td className="text-end">BIO</td>
                          <td>{author.bio}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
              <div className="card-footer text-body-secondary">
                <div className="">
                  <Link to={"/portal/home"} className="btn btn-primary px-lg-5">
                    Back
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewAuthor;
