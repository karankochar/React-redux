

function Header(){
    return(
        <div className='jumbotron text-center'>
        <h1 className='display-4'>React Redux</h1>
        <hr/>
        <p className='my-4'>
            This project is going to perform CRUD operations on student by interacting with backend application.
            Using axios, we will be able to call REST endpoint which we have defined in backend-application.
        </p>
        </div>
    );
}

export default Header;