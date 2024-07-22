"use client";
import React from "react";
import { useState } from "react";
const Homepage = () => {

    function handleAddUser(e) {
        // Prevent the browser from reloading the page
        e.preventDefault();

        // Read the form data
        const form = e.target;
        const formData = new FormData(form);
    
        // Or you can work with it as a plain object:
        const formJson = Object.fromEntries(formData.entries());
        console.log(formJson);
      }
  return (
    <>
      <div className="flex justify-center mt-12">
        <button
          onClick={() => document.getElementById("my_modal_5").showModal()}
          className="btn btn-accent rounded-full font-bold flex justify-between gap-12 items-center"
        >
          Add New User <span className="text-lg">+</span>
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>1</th>
              <td>john doe</td>
              <td>johndoe@gmail.com</td>
              <td>19</td>
              <td className="flex gap-4 justify-center items-center">
                <button className="btn btn-primary">Edit</button>
                <button className="btn btn-error">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
            <form onSubmit={handleAddUser} className="flex flex-col gap-4">
                <label className="input input-bordered flex items-center gap-2">
                    Name
                    <input type="text" name="name" className="grow" />
                </label>
                <label className="input input-bordered flex items-center gap-2">
                    Email
                    <input type="text" name="email" className="grow" />
                </label>
                <label className="input input-bordered flex items-center gap-2">
                    Age
                    <input type="number" name="age" className="grow" />
                </label>
                <div>
                    <button  type="submit" className="btn btn-accent mt-4">Add User</button>
                </div>
            </form>
            
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default Homepage;
