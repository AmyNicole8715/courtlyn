import AdBar from "./AdBar";
import Body from "./Body";
import UserBar from "./UserBar";

function MainView () {
    return (
            <div className="main" >
                <UserBar />
                <Body />
                <AdBar />
            </div>
    );

    
}

export default MainView;