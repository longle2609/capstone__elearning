import { Col, Row } from 'antd'
import React from 'react'
import { Outlet } from 'react-router-dom'

const AuthLayout = () => {
    return (
        <Row>
            <Col span={12} className="w-full min-h-screen bg-orange-500">
                Login/Register image here...
            </Col>
            <Col span={12}>
                <main className="w-full min-h-screen bg-slate-200">
                    ---Authentication Layout ---
                    <Outlet />
                    --- ---
                </main>
            </Col>
        </Row>
    )
}

export default AuthLayout