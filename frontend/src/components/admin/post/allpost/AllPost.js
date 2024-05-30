import React, { useEffect, useState } from "react";
import { Aside } from "../../aside/Aside";
import { NavLink, useNavigate } from "react-router-dom";
import "./AllPost.css";
import CreatePost from "../createpost/CreatePost";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import {
  ClearError,
  DeleteBlogPost,
  GetBlogPost,
} from "../../../../actions/BlogPostAction";
import { DELETE_BLOG_POST_RESET } from "../../../../constants/BlogPostConstants";
import Post_tabel from "../Post_tabel";
import { Button } from "@material-ui/core";
import Bulk_Action from "../../../../utils/admin_filter/Bulk_Action";
import Filter_by_Date from "../../../../utils/admin_filter/Filter_by_Date";
import Categories_filter from "../../../../utils/admin_filter/Categories_filter";
import Search_filter from "../../../../utils/admin_filter/Search_filter";
import All_Filter_links from "../../../../utils/admin_filter/All_Filter_links";
import Table_filter from "../../../../utils/admin_filter/Table_filter";

function AllPost() {
  const dispatch = useDispatch();
  const alert = useAlert();
  const Navigate = useNavigate();
  const { loading, blog, error } = useSelector((state) => state.allBlog);
  const {
    loading: deleteLoading,
    isDeleted,
    error: deleteError,
  } = useSelector((state) => state.adminDeletePost);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(ClearError());
    }
    if (deleteError) {
      alert.error(deleteError);
      dispatch(ClearError());
    }
    if (isDeleted) {
      alert.success("Post has been deleted");
      dispatch({ type: DELETE_BLOG_POST_RESET });
    }
    dispatch(GetBlogPost());
  }, [alert, dispatch, error, Navigate, deleteError, isDeleted]);

  const deletehandler = (id) => {
    dispatch(DeleteBlogPost(id));
  };

  return (
    <>
      <div className="admin-page">
        <div className="admin-page-area">
          <Aside />
          <div id="ad-body">
            <div className="ad-cont">
              <section className="page-section">
                <div className="all-post">
                  <div className="all-post-heading row" style={{ gap: 5 }}>
                    <h2>Posts</h2>
                    <Button
                      style={{ width: "150px" }}
                      size="small"
                      className="xsm-font-size"
                      onClick={() => Navigate("/admin/post/add-new-post")}
                      variant="outlined"
                    >
                      Add New Post
                    </Button>
                  </div>
                  <div className="all-products-cont">
                    <div className="all-products-content-area">
                      <div className="productdata">
                        {/* {deleteLoading ? (
                          <Loader />
                        ) : (
                          <>
                            {blog && blog.length > 0 ? (
                              <> */}
                        <div className="table-grid">
                          <Post_tabel blog={blog} />
                        </div>
                        {/* </>
                            ) : (
                              <p>no data found</p>
                            )}
                          </>
                        )} */}
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AllPost;
