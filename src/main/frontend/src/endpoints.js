const endpoints = () => {
    if(process.env.NODE_ENV == 'dev') {
        return "http://localhost:8080"
    } else {
        return "";
    }
};
export default endpoints();