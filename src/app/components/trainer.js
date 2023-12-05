
export default function Trainer(){
    return(
        <div className='p-2 bg-white drop-shadow-md m-4 w-screen rounded-lg '>  
        <div className='inline-flex mt-4 '>
             <div className='bg-green relative drop-shadow-xl rounded w-10 h-10 ml-4'></div>
              <span className='ml-4 pt-2 text-blue text-2xl'>Train Your Bot</span>
        </div>
        <div className='flex mx-8 my-10 gap-10'>
        <div>
        <div className="label">
    <span className="label-text">Add new file</span>
    <span className="label-text-alt">Data Source</span>
  </div>
            <input type="file" className="file-input file-input-bordered w-full max-w-xs" /></div>
        <div>
        <label className="form-control w-full max-w-xs">
  <div className="label">
    <span className="label-text">Add new URL</span>
    <span className="label-text-alt">Data Source</span>
  </div>
  <input type="text" placeholder="https://www.example.com" className="input input-bordered w-full max-w-xs" />
 
</label>
        </div>
      </div>
      <div>
      
      <div className="overflow-x-auto px-6">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Description</th>
        <th>File Type</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <th>1</th>
        <td>Legal</td>
        <td>Quality Control Specialist</td>
        <td>URL</td>
      </tr>
      {/* row 2 */}
      <tr>
        <th>2</th>
        <td>Support</td>
        <td>Desktop Support Technician</td>
        <td>PDF</td>
      </tr>
      {/* row 3 */}
      <tr>
        <th>3</th>
        <td>Tax</td>
        <td>Tax Accountant</td>
        <td>URL</td>
      </tr>
    </tbody>
  </table>
</div>


      

          </div>
          
        </div>
        

    )
}