import React, { useEffect, useState } from 'react';
import { Select, Form } from 'antd';
import MiniDesc from './components/after_view_details';
const { Option } = Select;

function ShowDetails() {
    const [report, setreport] = useState([]);
    const [report_id, setreport_id] = useState({});
    const [isSelect, setSelect] = useState(false);
    const setforgetdetails = async () => {
        await fetch(`https://run.mocky.io/v3/bbc715a0-2f96-4559-8025-8b3b8e0f828b`)
            .then(res => console.log(res))
            .then((result) => {
                console.log(result);
                setreport_id(result);
                setSelect(true)
            }
            )
    }
    useEffect(() => {
        // fetch("http://localhost:8080/getreport")
        //     .then(res => res.json())
        //     .then((result) => {
        //         setreport(result);
        //     }
        //     )
        fetch(`https://run.mocky.io/v3/bbc715a0-2f96-4559-8025-8b3b8e0f828b`)
            .then(res => res.json())
            .then((result) => {
                console.log(result);
                 setreport_id(result);
                
            }
            )
        console.log(isSelect)
    }, [isSelect])
function fun(){
    setSelect(!isSelect);
}
    return (<div>
        <div>

            <Form
                name="basic"
                labelCol={{
                    span: 4,
                }}
                wrapperCol={{
                    span: 14,
                }}
                layout="horizontal"


                initialValues={{
                    remember: true,
                }}
                autoComplete="off"
            >

                <div className='input-container'>
                    <Form.Item
                        label="Vendor Name"
                      
                        
                    >
                        <Select placeholder='select vendor name' onChange={fun} >
                           
                                <Option>{report_id.name}</Option>
                           
                        </Select>
                    </Form.Item>

                </div>
                {isSelect ?<Form.Item className='input-container'><MiniDesc report={report_id} /> </Form.Item> : <h1></h1>}
            </Form>
        </div>
        

        
    </div>
    );
}
export default ShowDetails;