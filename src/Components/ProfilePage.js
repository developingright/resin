import React from 'react'

const ProfileImg = () =>{
    const profile_img = "http://bootdey.com/img/Content/avatar/avatar1.png"
    return(
        <div className="col-xl-4">
            <div className="card mb-4 mb-xl-0">
                <div className="card-header">Profile Picture</div>
                <div className="card-body text-center">
                    <img className="img-account-profile rounded-circle mb-2" src={profile_img} alt="" />
                    <div className="small font-italic text-muted mb-4">JPG or PNG no larger than 5 MB</div>
                    <button className="btn btn-primary" type="button">Upload new image</button>
                </div>
            </div>
        </div>
    );
}

const Form = () => {
    return(
        <form>
            <div className="mb-3">
                <label className="small mb-1" htmlFor="inputUsername">Username (how your name will appear to other users on the site)</label>
                <input className="form-control" id="inputUsername" type="text" />
            </div>
            <div className="mb-3">
                <label className="small mb-1" htmlFor="inputEmailAddress">Email address</label>
                <input className="form-control" id="inputEmailAddress" type="email"  />
            </div>
            <div className="row gx-3 mb-3">
                <div className="col-md-6">
                    <label className="small mb-1" htmlFor="inputFirstName">First name</label>
                    <input className="form-control" id="inputFirstName" type="text" />
                </div>
                <div className="col-md-6">
                    <label className="small mb-1" htmlFor="inputLastName">Last name</label>
                    <input className="form-control" id="inputLastName" type="text" />
                </div>
            </div>
            <div className="row gx-3 mb-3">
                <div className="col-md-6">
                    <label className="small mb-1" htmlFor="inputOrgName">Organization name</label>
                    <input className="form-control" id="inputOrgName" type="text" />
                </div>
                <div className="col-md-6">
                    <label className="small mb-1" htmlFor="inputLocation">Location</label>
                    <input className="form-control" id="inputLocation" type="text" />
                </div>
            </div>
            <div className="row gx-3 mb-3">
                <div className="col-md-6">
                    <label className="small mb-1" htmlFor="inputPhone">Phone number</label>
                    <input className="form-control" id="inputPhone" type="tel" />
                </div>
                <div className="col-md-6">
                    <label className="small mb-1" htmlFor="inputBirthday">Birthday</label>
                    <input className="form-control" id="inputBirthday" type="text" name="birthday"  />
                </div>
            </div>
            <button className="btn btn-primary" type="button">Save changes</button>
        </form>
    );
}

export default function ProfilePage() {
  return (
    <div className="container p-4">
      <div className="row">
        <ProfileImg />
        <div className="col-xl-8">
            <div className="card mb-4">
                <div className="card-header">Account Details</div>
                <div className="card-body">
                    <Form />
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}
