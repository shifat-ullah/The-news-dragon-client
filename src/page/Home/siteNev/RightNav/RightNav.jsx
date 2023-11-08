import { Button, ListGroup } from "react-bootstrap";
import { FaGoogle, FaFacebook, FaTwitter, FaGithub, FaInstagram } from "react-icons/fa6";
import Qzone from "./Qzone";
import { GoogleAuthProvider, getAuth, GithubAuthProvider, signInWithPopup } from "firebase/auth";
import app from "../../../../../firebase/firebase.config";

const RightNav = () => {
    const Googleprovider = new GoogleAuthProvider();
    const Gitprovider = new GithubAuthProvider();
    const auth = getAuth(app);

    const handleGoogle = () => {
        signInWithPopup(auth, Googleprovider)
            .then((result) => {

                const user = result.user;
                console.log(user)

            }).catch((error) => {

                const errorMessage = error.message;
                console.log(errorMessage)
            });
    }

    const handleGithub =()=>{
        signInWithPopup(auth, Gitprovider)
      .then((result) => {
       
        const user = result.user;
       
      }).catch((error) => {
        
      
        const errorMessage = error.message;
       
      });
      }
    return (
        <div className="">
            <h2 className="text-center">Login with</h2>
            <div className="text-end">
                <Button onClick={handleGoogle} className="px-5 mb-2" variant="outline-primary"><FaGoogle></FaGoogle> Login with Google</Button>
                <Button onClick={handleGithub} className="px-5" variant="outline-secondary"><FaGithub></FaGithub> Login with GitHub</Button>
            </div>
            <div className="mt-3">
                <h3 className="text-center">Find Us On</h3>

                <ListGroup>
                    <ListGroup.Item><FaFacebook></FaFacebook> Facebook</ListGroup.Item>
                    <ListGroup.Item><FaTwitter></FaTwitter> Twitter</ListGroup.Item>
                    <ListGroup.Item><FaInstagram></FaInstagram> Instragrm</ListGroup.Item>
                </ListGroup>
            </div>

            <Qzone></Qzone>
        </div>
    );
};

export default RightNav;