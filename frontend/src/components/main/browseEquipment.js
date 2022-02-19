import React from 'react'
import { Formik } from 'formik'
import { Button, TextField } from '@mui/material'

const BrowseEquipment = () => {
    const equipmentform = {
        title: "",
        tags: "",
        thumbnail: "",
        description: "",
        rentableField : false,
    };


  return (
    <div class="container mt-5">
      <div class="card">
        <div class="row">
          <div class="col-md">
            <div class="img-back"></div>
          </div>

          <div class="col-md">
            <div class="card-body my-card-body">
              <p class="h3">Add Equipment</p>
              <p class="text-muted">Add new equipment</p>

              <hr />

              <Formik initialValues={equipmentform} onSubmit={formSubmit}>
                {({ values, handleSubmit, handleChange }) => (
                  <form onSubmit={handleSubmit}>
                    <TextField
                      className="w-100 mt-5"
                      variant="filled"
                      id="title"
                      type="text"
                      label="Equipment Name"
                      onChange={handleChange}
                      value={values.title}
                    />

                    <TextField
                      className="w-100 mt-3"
                      id="tags"
                      type="text"
                      label="Tags"
                      onChange={handleChange}
                      value={values.tags}
                    ></TextField>
                    <TextField
                      className="w-100 mt-3"
                      id="description"
                      type="text"
                      label="Description"
                      onChange={handleChange}
                      value={values.description}
                    ></TextField>
                    <TextField
                      className="w-100 mt-3"
                      id="thumbnail"
                      type="text"
                      label="Thumbnail"
                      onChange={handleChange}
                      value={values.thumbnail}
                    ></TextField>
                    <TextField
                      className="w-100 mt-3"
                      id="rentablefield"
                      type="text"
                      label="RentableField"
                      onChange={handleChange}
                      value={values.rentablefield}
                    ></TextField>
                    

                    <Button
                      type="submit"
                      color="primary"
                      variant="contained"
                      className="mt-5 w-50"
                    >
                      Add Equipment
                    </Button>

                    
                  </form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BrowseEquipment;