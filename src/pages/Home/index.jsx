import Chips from '../../components/atoms/chips'
import { confirmModalState } from '../../shared/recoil/confirmModalState'
import { useRecoilState } from 'recoil'

const Home = () => {
    const [modalOpen, setModalOpen] = useRecoilState(confirmModalState)

    const handleModal = () => {
        setModalOpen({ isOpen: true })
    }
    

    return (
        <div>
            <Chips isPress={true}>추리소설</Chips>
            <Chips isPress={false}>판타지</Chips>
        </div>
    )
    
}

export default Home
