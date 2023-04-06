import { Button, Result } from "antd";
import { useNavigate } from "react-router-dom";

export default function Tapilmadi() {
    const navigate = useNavigate()
    return (
        <Result
            status='404'
            title="404"
            subTitle="Axtardığınız məlumat tapılmadı!"
            extra={<Button type="primary" onClick={ () => navigate("/") }>Ana səhifəyə qayıt</Button>}
        />
    )
}
