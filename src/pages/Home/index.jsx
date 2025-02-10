import Tag from '../../components/atoms/Tag'
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
      <Tag type="yellow">판타지</Tag>
      <Tag type="gray">나와요</Tag>
      <Tag type="skyblue">판타지</Tag>
      <Tag type="">내향인 관찰자</Tag>
    </div>
  )
}

export default Home
