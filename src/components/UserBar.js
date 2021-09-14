import ReactPlayer from "react-player";


function UserBar () {

    return (
            <div className="userBar" >
                <div className="playerWrapper">
                    <ReactPlayer
                        className='reactPlayer'
                        url='https://www.youtube.com/watch?v=Pn-6eOxnEMI'
                        width='max-width'
                    />
                </div>
            </div>
    );

    
}

export default UserBar;