<template>
<table class="min-w-full m-5 border-collapse block md:table">
		<thead class="block md:table-header-group">
			<tr class="border border-grey-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto  md:relative ">
				<th class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Full Name</th>
				<th class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Email Address</th>
				<th class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Mobile</th>
                <th class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Actions</th>
			</tr>
		</thead>
		<tbody class="block md:table-row-group">
			<tr class="bg-gray-300 border border-grey-500 md:border-none block md:table-row"
                v-for="people in peoples" :key="people.id"
            
            >
				<td class="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span class="inline-block w-1/3 md:hidden font-bold">
                   </span> {{people.fullName}}</td>
				<td class="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span class="inline-block w-1/3 md:hidden font-bold">Email Address</span>{{people.email}}</td>
				<td class="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span class="inline-block w-1/3 md:hidden font-bold">Mobile</span>{{people.number}}</td>
				<td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
					<span class="inline-block w-1/3 md:hidden font-bold">Actions</span>
					<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 border border-blue-500 rounded">Edit</button>
					<button @click="del(people.id)" class="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 border border-red-500 rounded">Delete</button>
				</td>
			</tr>			
		</tbody>
	</table>
</template>

<script>
import axios from 'axios';
export default {
    
    name:"list",
    data(){
        return {
            peoples:[]
        }
    },
    mounted(){
        this.people()
    },
    methods:{
        async people(){
            await axios.get('http://127.0.0.1:8000/api/getPeople').then(response=>{
                this.peoples = response.data
            }).catch(error=>{
                console.log(error)
                //this.peoples = []
            })
        },
        del(id){
            if(confirm("Are you sure to delete this category ?")){
                axios.delete(`http://127.0.0.1:8000/api/deletePeople/${id}`).then(response=>{
                    console.log(response)
                }).catch(error=>{
                    console.log(error)
                })
            }
        }
    }
}
</script>