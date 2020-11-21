// import logo from './logo.svg';
// import './App.css';
//import Text from './component/Text';
import WordCard from '../component/WordCard'
import { Button, Row, Col } from 'antd';
import styled from 'styled-components';
import { useState } from 'react';
import { Input, Select } from 'antd';
// import { useState } from 'react';

const StyledWrapper = styled.div`
  padding: 20px 10%;
  @media(max-width: 425px)
  {
      padding: 20px 0;
  }  
  .selectType{
    /* min-width: 200px;
    max-width: 500px; */
    width: 100%;
  }
  .form-item{
     

  }
`
const typesOptions=[
  {label: 'noun', value: 'noun'},
  {label: 'verb', value: 'verb'},
  {label: 'adj', value: 'adj'},
  {label: 'adv', value: 'adv'}
]

function Homepage() {

  const data = [{ "meanings": ["มาพร้อมกับ"], "word": "Accompany", "createdAt": "2020-11-15T11:56:52.792Z", "types": ["verb"] },
  { "meanings": ["การเข้าซื้อกิจการ", "การเข้าถือสิทธิ์", "การครอบครอง"], "types": ["noun"], "createdAt": "2020-11-17T06:39:36.046Z", "word": "acquisition" }, { "word": "complaint", "meanings": ["การร้องเรียน", "การร้องทุกข์", "การคร่ำครวญ"], "types": ["noun"], "createdAt": "2020-11-17T07:05:40.824Z" }, { "word": "complying", "types": ["noun"], "createdAt": "2020-11-17T07:08:25.211Z", "meanings": ["การยอมตาม", "การยินยอม", "การปฏิบัติตาม"] }, { "createdAt": "2020-11-17T05:40:43.548Z", "word": "correspondence", "types": ["noun"], "meanings": ["จดหมายโต้ตอบ", "ความเหมือนกัน"] }, { "word": "delegate", "meanings": ["ตั้งตัวแทน", "มอบหน้าที่"], "types": ["verb"], "createdAt": "2020-11-16T16:44:23.992Z" }, { "types": ["verb"], "word": "deserve", "meanings": ["สมน้ำสมเนื้อ", "สมควรได้รับ"], "createdAt": "2020-11-16T16:41:43.017Z" }, { "meanings": ["พยายาม", "มุมานะ", "อุตส่าห์"], "word": "endeavor", "types": ["verb"], "createdAt": "2020-11-17T06:03:36.413Z" }, { "types": ["verb"], "word": "engage", "createdAt": "2020-11-17T05:57:17.307Z", "meanings": ["มีส่วนร่วม", "ว่าจ้าง"] }, { "createdAt": "2020-11-17T07:06:42.122Z", "types": ["noun"], "word": "grievance", "meanings": ["ความไม่พอใจ", "ความเศร้าโศก", "ความขัดข้องใจ"] }, { "types": ["adverb"], "meanings": ["โดยนัยนี้", "ด้วยเหตุนี้", "โดยวิธีนี้"], "createdAt": "2020-11-17T05:37:12.526Z", "word": "hereby" }, { "types": ["adjective"], "createdAt": "2020-11-15T11:56:25.637Z", "meanings": ["ถูกต้องตามกฎหมาย"], "word": "legitimate" }, { "word": "merger", "meanings": ["การควบรวบกิจการ"], "createdAt": "2020-11-17T06:38:39.071Z", "types": ["noun"] }, { "word": "meticulous", "createdAt": "2020-11-17T07:47:36.831Z", "types": ["adjective"], "meanings": ["พิถีพิถัน", "เข้มงวด", "กวดขัน"] }, { "createdAt": "2020-11-17T06:05:44.594Z", "types": ["noun"], "meanings": ["ขั้นตอน", "กระบวนการ", "ระเบียบการ"], "word": "procedure" }, { "meanings": ["พิถีพิถัน", "แม่นยำ", "รุนแรง"], "word": "rigorous", "createdAt": "2020-11-17T07:49:20.488Z", "types": ["adjective"] }]

  const [number, setNumber] = useState(1);
  const [dataList, setDataList] = useState(data);
  const [word, setWord] = useState('Hello');
  const [types, setTypes] = useState(['verb']);
  const [meanings, setMeaning] = useState('สวัสดี');



  const handleClick = () => {
    setNumber(number + 1);
    console.log(number);
  }
  const handleClick2 = () => {
    // dataList.push()
    // dataList[dataList.length] = {}
    setDataList([...dataList, {
    "meanings": meanings.split(",").map((item) => item.trim()),
    "word": [word],
    "types": [types]
    }])
  }
  const handleDelete = (index) =>{
    // console.log(index);
    const newArr = dataList.filter((data, id) => {
      return id !== index;
    })
    setDataList(newArr);
  }
  const str = "Hello"
  //const data = "this is a content"
 
  return (
    <div className="App">
      {/* <Button type = "primary">But</Button> */}

      {/* <WordCard 
    word = {vocab.word} 
    type = {vocab.type} 
    meaning = {vocab.meaning}
    /> */}
      {/* <WordCard {...vocab}/>
    <WordCard {...vocab2}/>
    <WordCard {...vocab3}/> */}
      <StyledWrapper>
        {<Button type="primary" onClick={handleClick}>{number}</Button>}
        <h1>Vocab</h1>
        <div className = "form-item">
              <div>
                <div>
                <label htmlFor='Word-input'>Word</label> 
                  </div>
                  <Input value = {word} id = 'Word-input' placeholder="Typing" onChange={(event) => {setWord(event.target.value)}}/>
                </div>
          </div>
          <div className = "form-item">
              <div>
                <div>
                <label htmlFor='selected-type'>Types</label>
                  </div>
                  <Select value ={types} className = "selectType" id = 'selected-type' options = {typesOptions} mode = "multiple" onChange = {(values) => { setTypes(values)}}/>
                </div>
          </div>
          <div className = "form-item">
              <div>
                <div>
                <label htmlFor='mean'>Meaning</label>
                  </div>
                  <Input value = {meanings} className = "selectType" id = 'mean' onChange = {(e) => { setMeaning(e.target.value)}}/>
                </div>
          </div>
        {<Button type="primary" onClick={handleClick2}>Add Vocab</Button>}
        <Row gutter={[10, 10]}>
          {
            dataList.map((item, index) => {
              return (
                <Col key={index} xs={24} sm={12} md={8} lg={6}>
                  <WordCard {...item} onDelete = {() => { handleDelete(index)}}/>
                </Col>
              )
            })
          }
        </Row>
      </StyledWrapper>
    </div>

  );
}

export default Homepage;
