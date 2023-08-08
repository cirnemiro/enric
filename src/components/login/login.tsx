import Input from "../input";
import InputLabel from "../inputLabel/inputLabel";

export default function Login(){
    return(
        <>
            Login component
            <form>
                <InputLabel>
                    <label style={{width:"100%"}}>hello</label>
                    <Input type="text" ></Input>
                </InputLabel>
            </form>
        </>
    )
}