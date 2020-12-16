import React, { Component } from "react";

export default class ModalRoom extends Component {
  render() {
    return (
      <div>
        {/* Button trigger modal */}
        <button
          type="button"
          className="btn btn-primary btn-lg"
          data-toggle="modal"
          data-target="#modelRoom"
        >
          <i class="fa fa-plus"></i>
        </button>
        {/* Modal */}
        <div
          className="modal fade"
          id="modelRoom"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="modelTitleId"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Room</h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <form>
                  <div>
                    <div className="form-group">
                      <label htmlFor="ID">ID</label>
                      <input
                        type="text"
                        className="form-control"
                        name="idRoom"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="Name">Name room</label>
                      <input
                        type="text"
                        className="form-control"
                        name="nameRoom"
                      />
                    </div>
                    <div className="form-group">
                      <div className="row" style={{}}>
                        <label htmlFor="Image" className="col-2">
                          Image
                        </label>
                        <input
                          type="file"
                          className="col-10"
                          name="fileDevice"
                        />
                      </div>
                      <div id="image-show" />
                    </div>
                    <button type="submit" className="btn btn-success">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
