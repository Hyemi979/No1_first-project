import Button from '../../components/atoms/Button'
import { confirmModalState } from '../../shared/recoil/confirmModalState'
import { useRecoilState } from 'recoil'
import Viewbutton from '../../components/atoms/Viewbutton';


const Home = () => { 
    const [modalOpen, setModalOpen] = useRecoilState(confirmModalState)
 
    const handleModal = () => {
        setModalOpen({ isOpen: true })
    }

    return (
        <div>
            <button onClick={handleModal}>모달 오픈</button>
            <Button disabled>다음</Button>
            <Viewbutton>전체보기</Viewbutton>
        

        </div>
    )
}

export default Home
