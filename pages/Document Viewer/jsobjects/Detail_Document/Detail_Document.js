export default {
	async init(){
		const resultDetailDocument = await Get_Detail_Document.run();
		Detail_Document_Data.data = resultDetailDocument;
		console.log(Detail_Document_Data.data)
	}
}