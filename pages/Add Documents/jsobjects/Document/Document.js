export default {
	async insertDocument(document, file, coverImage){
		const title = document.title;
		const author = document.author;
		const description = document.description;
		if(file.data.indexOf('pdf') == 17 && coverImage){
			const baseUrl = 'https://res.cloudinary.com/dp6hjihhh/image/upload/';

			const resultUploadPDF = await Cloudinary_API_Upload_Document.run();
			const pdfVersion = resultUploadPDF.version;
			const pdfPublicId = resultUploadPDF.public_id;
			const pdfFormat = resultUploadPDF.format;
			const pdfUrl = `${baseUrl}v${pdfVersion}/${pdfPublicId}.${pdfFormat}`;

			const resultUploadCoverImg = await Cloudinary_API_Upload_CoverImg.run();
			const imgVersion = resultUploadCoverImg.version;
			const imgPublicId = resultUploadCoverImg.public_id;
			const imgFormat = resultUploadCoverImg.format;
			const imgUrl = `${baseUrl}v${imgVersion}/${imgPublicId}.${imgFormat}`;

			const Document = {
				pdfUrl: pdfUrl,
				coverImageUrl: imgUrl,
				title: title,
				author: author,
				description: description,
			}
			Documents_Data.data = Document;
			await Insert_Document.run();
		}
	}
}