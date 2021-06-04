import { useState } from 'react';
import styled from 'styled-components';


const Wrapper = styled.div`
    max-width: 400px;
    margin: 0 auto;
    text-align: center;

    label {
        text-align: left;
        display: block;
    };

    h2 {
        font-size: 20px;
        color: #f1356d;
        margin-bottom: 30px;
    };

    input, textarea, select {
        width: 100%;
        padding: 6px 10px;
        margin: 10px 0;
        border: 1px spolid #ddd;
        box-sizing: border-box;
        display: block;
    };

    button {
        background: #f1356d;
        color: #fff;
        border: 0;
        padding: 8px;
        border-radius: 8px;
        cursor: pointer;
    }

`;

const Create = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Maciej');

    return ( 
        <Wrapper>
            <h2> Add New Blog</h2>
            <form>
                <label>Blog title:</label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange ={ (e) => setTitle(e.target.value)}
                ></input>
                
                <label>Blog body:</label>
                <textarea
                    required
                    value={body}
                    onChange={ (e) => setBody(e.target.value) }
                ></textarea>

                <label>Blog author:</label>
                <select value={author} onChange={(e) => setAuthor(e.target.value)}>
                    <option value="Karolina">Karolina</option>
                    <option value="Maciej">Maciej</option>
                </select>
                <button>Add Blog</button>
                <p>{title}</p>
                <p>{body}</p>
                <p>{author}</p>
            </form>
        </Wrapper>
     );
}
 
export default Create;