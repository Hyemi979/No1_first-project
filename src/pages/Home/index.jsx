import TextField from '../../components/atoms/TextField'
import Title from '../../components/atoms/Title'
import { confirmModalState } from '../../shared/recoil/confirmModalState'
import { useRecoilState } from 'recoil'

const Home = () => {
  const [modalOpen, setModalOpen] = useRecoilState(confirmModalState)

  const handleModal = () => {
    setModalOpen({ isOpen: true })
  }

    return (
        <div>
            <button onClick={handleModal}>모달 오픈</button>
            <TextField placeholder="(최소 10자 이상)"/>
            <Title>안녕하세요!</Title>
        </div>
    )
    
}

export default Home