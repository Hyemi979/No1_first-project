import styles from './index.module.css';
import leftArrow_icon from '../../../assets/image/leftArrow_icon.svg'
import search_icon from '../../../assets/image/search_icon.svg'
import bell_icon from '../../../assets/image/bell_icon.svg'
import DM_icon from '../../../assets/image/DM_icon.svg'
import dotsMenu_icon from '../../../assets/image/dotsMenu_icon.svg'
import cog_icon from '../../../assets/image/cog_icon.svg'
import useNavigationPage from '../../../hooks/useNavigationPage';

const TopNavBar = ({ navtitle='', search, bell, chat, dots, settings, children, ...rest }) => {

    const { routePage } = useNavigationPage();

    const handler = () => {
        routePage(-1);
    };

    return (
        <div {...rest} className={styles.wrap}>
            {children}
            <div className={styles.left}>
                <button onClick={handler} className={styles.backButton}>
                    <img src={leftArrow_icon} alt='뒤로가기 아이콘' width={28} height={28} />
                </button>
                <h1 className={styles.title}>{navtitle}</h1>
            </div>
            <div className={styles.icons}>
                {search && <span className={styles.icon}><img src={search_icon} alt='검색 아이콘' width={24} height={24} /></span>}
                {bell && <span className={styles.icon}><img src={bell_icon} alt='알림 아이콘' width={25} height={25} /></span>}
                {chat && <span className={styles.icon}><img src={DM_icon} alt='개인 채팅 아이콘' width={25} height={25} /></span>}
                {dots && <span className={styles.icon}><img src={dotsMenu_icon} alt='점세개 아이콘' width={25} height={25} /></span>}
                {settings && <span className={styles.icon}><img src={cog_icon} alt='설정 아이콘' width={22} height={22} /></span>}
            </div>
        </div>
    )
}

export default TopNavBar;
