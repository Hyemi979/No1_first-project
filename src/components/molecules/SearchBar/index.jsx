import { useRef, useState } from 'react';
import styles from './index.module.css';
const SearchBar = ({ nextStep }) => {
  const ref = useRef(null);
  const handleChange = (e) => {
    const value = e.target.value;
    if (value !== '' && value !== undefined) {
      setIsAccept(false);
    }
  };
    const Input = ({ inputRef, ...rest }) => {
      return <input ref={inputRef} {...rest} className={styles.wrap2}></input>;
    };
  return (
    /* 전체 콘텐츠감싸고 있는 div*/
<div id="info__id">
      <Input
        inputRef={ref}
        placeholder='       원하는 모임 키워드로 검색'
        
        onChange={handleChange}/> 

    </div>
  );
};
export default SearchBar;