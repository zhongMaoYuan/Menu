import React, { useRef } from 'react';
import { Input, Button } from 'antd';
import { connect } from 'react-redux'


const Child = ({changeName}) => {
    const inputValue = useRef()
    return (
        <div>
            <Input placeholder="请输入菜单名" style={{ width: 300 }} ref={inputValue} />
            <Button type="primary" onClick={() => {
                changeName(inputValue.current.input.value);
            }}>保存</Button>
        </div>
    );
};

export default connect(null, dispatch => {
    return {
        changeName(payload) {
            return dispatch({ type: 'CHANGE_NAME1' ,payload})
        }
    }
})(Child);