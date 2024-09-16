export default {
	async init(){
		const resultGetDocuments = await Get_Documents.run();
		Documents.data = resultGetDocuments;
		console.log(Documents.data)
	}
}