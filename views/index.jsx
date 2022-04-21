import { useState } from 'react/cjs/react.production.min';
import '../app';


function searchPage() {
    const [searchTerm, setSearchTerm] = useState('');
    return (
        <div className='WebPage'>
            <input type='text' onChange/>

        </div>
    );
}