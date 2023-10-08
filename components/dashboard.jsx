'use client'
import '../app/css/style.css'
import Modal from '@mui/material/Modal';
import { useEffect , useRef,useState} from 'react';
import * as React from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
 
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {Add} from '@mui/icons-material';
import EditModal from '@/components/tableEditModal'
 
  
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
   bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function Dashboard( ) {

  const [news, setNews] = useState([]);
  const [openCreate, setOpenCreate] = React.useState(false);
  const handleOpenCreate= () => setOpenCreate(true);
  const handleCloseCreate= () => setOpenCreate(false);
 

  useEffect(() => {
    axios({method:'get',url:'https://kory.bsite.net/news' } ).then((resp) => {
      const allNews = resp.data;
      setNews(allNews);
    });
   
  }, [setNews]);
 
 
 const [title,setTitle] = useState('');
 const [newsContent,setContent] = useState('');
 const save = async () => {
  
  await axios.post( 'https://kory.bsite.net/news/',  {
    "content": newsContent,
    "title": title
  });
 setOpenCreate(false);

  };
  return (
 
      
  
 <>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Заголовок</TableCell>
            <TableCell align="right"><button onClick={handleOpenCreate}>Добавить новость<Add/></button></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {news.map((row) => (
            <TableRow
            key={row['id']}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row['title']}
              </TableCell>
              <TableCell align="right"> <EditModal content = {row['content']} title={row['title']} id={row['id']}/></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <Modal
        open={openCreate}
        onClose={handleCloseCreate}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >
        <Box sx={style} >
    
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full ">
                  <label className="block text-gray-700 text-sm font-medium mb-1" >Заголовок <span className="text-red-600">*</span></label>
                  <input id="full-name" type="text" name='user_name' className="form-input w-full text-gray-700 " onChange={(e)=>setTitle(e.target.value)}  required />
                </div>
              </div>
           
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full ">
                  <label className="block text-gray-700 text-sm font-medium mb-1"  >Содержание </label>
                  <textarea  name="message"  className="form-input w-full text-gray-700" required onChange={(e)=>setContent(e.target.value) } />
                </div>
              </div>
          
              <div className="flex flex-wrap -mx-3 mt-6">
                <div className="w-full px-3">
          <button className="btn text-white bg-green-600 hover:bg-green-700 w-full" onClick={ save} >Опубликовать</button>
                </div>
              </div>
             
        </Box>
      </Modal>
    </>
 
    
  )
}