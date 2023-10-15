"use client";
import React, { useRef , useState, useEffect} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Delete , Edit } from '@mui/icons-material';
 
import axios from 'axios';


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

const EditModal  =({  id , title , content}) =>{
 
  const form = useRef();
  const [openEdit, setOpenEdit] = React.useState(false);
  const [openDel, setOpenDel] = React.useState(false);
  const handleOpenEdit = () => setOpenEdit(true);
  const handleCloseEdit = () => setOpenEdit(false);
  const handleOpenDel = () => setOpenDel(true);
  const handleCloseDel = () => setOpenDel(false);

 
  const save = async () => {
    setOpenEdit(false);
   
    await axios.put( 'https://kdsk-mari.amvera.io/news/'+id,  {
      "id": id,
      "content": "test",
      "title": "File"
     },  {headers: {"Access-Control-Allow-Origin": "*"} });
     window.location.reload();
    };
   
    const remove =   () => {
      setOpenDel(false);
        axios.delete('https://kdsk-mari.amvera.io/news'+id) 
        window.location.reload();
    };
    
  return (
    <div>
      <Button onClick={handleOpenEdit}><Edit/></Button>
      <Button onClick={handleOpenDel} color="secondary" ><Delete/></Button>
      <Modal
        open={openEdit}
        onClose={handleCloseEdit}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <form ref={form} onSubmit={save}>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full ">
                  <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="full-name">Заголовок <span className="text-red-600">*</span></label>
                  <input id="full-name" type="text" name='user_name' className="form-input w-full text-gray-700 " value={title} required />
                </div>
              </div>
           
              <div className="flex flex-wrap -mx-3 mb-4">
        <div className="w-full ">
                </div>
              </div>
             
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full ">
                  <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="password">Текст </label>
                  <textarea  name="message"  className="form-input w-full text-gray-700" value={content}     />
                </div>
              </div>
          
              <div className="flex flex-wrap -mx-3 mt-6">
                <div className="w-full px-3">
                  <button className="btn text-white bg-purple-600 hover:bg-purple-700 w-full">Отправить</button>
                </div>
              </div>
            </form>
        </Box>
      </Modal>
      <Modal
        open={openDel}
        onClose={handleCloseDel}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography className= " text-gray-700"  id="modal-modal-description "   sx={{ mt: 8, mb:8 }}>
          Удалить пост : {title} 
          </Typography>
          <button className="btn text-white bg-red-600 hover:bg-red-700 w-full" onClick={remove}>Удалить</button>
        </Box>
      </Modal>
    </div>
  );
}
export default EditModal;