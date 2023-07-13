import useAuth from "./useAuth";

const useGoogleLogin = () => {
    const {loginWithGoogle} = useAuth()

    loginWithGoogle()
    .then(result=>{
        const user = result.user;
        console.log(user)
    })
    .catch(error=>{
        console.error(error)
    })

    return [loginWithGoogle];
};

export default useGoogleLogin;