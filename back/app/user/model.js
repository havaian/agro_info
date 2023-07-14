// Importing mongoose
const mongoose = require('mongoose');

// Calling mongoose schema
const Schema = mongoose.Schema;

// Creating data schema
const userSchema = new Schema({
	"stir": {
		type: Number,
		required: true
	},
	"rasmiy_nomi": {
		type: String,
		required: true
	},
	"tashkil_yili": {
		type: Number,
		required: true
	},
	"qaror": {
		type: String,
		required: true
	},
	"faoliyat_turi": {
		type: String,
		required: true
	},
	"boshqaruv_shakli": {
		type: String,
		required: true
	},
	"ustav": {
		type: Number,
		required: true
	},
	"tasischi": {
		type: String,
		required: true
	},
	"tashkilot_soni": {
		type: Number,
		required: true
	},
	"tashkilot_raxbari_ismi": {
		type: String,
		required: true
	},
	"tashkilot_raxbari_nomeri": {
		type: Number,
		required: true
	},
	"tashkilot_bosh_xisobchisi": {
		type: String,
		required: true
	},
	"tashkilot_xisobchi_nomeri": {
		type: Number,
		required: true
	},
	"yuridik_manzili": {
		type: String,
		required: true
	},
	"joylashgan_manzili": {
		type: String,
		required: true
	},
	"vebsayt_nomi": {
		type: String,
		required: true
	},
	"asosiy_raqam": {
		type: Number,
		required: true
	},
	"bank_nomi": {
		type: String,
		required: true
	},
	"xisob_raqam": {
		type: Number,
		required: true
	},
	"tashqari_xisob_raqam": {
		type: Number,
		required: true
	},
	"tijorat_xisob_raqam": {
		type: Number,
		required: true
	},
	"umumiy_yer": {
		type: Number,
		required: true
	},
	"paxta": {
		type: Number,
		required: true
	},
	"galla": {
		type: Number,
		required: true
	},
	"issiqxona": {
		type: Number,
		required: true
	},
	"bog_maydoni": {
		type: Number,
		required: true
	},
	"tokzor": {
		type: Number,
		required: true
	},
	"poliz": {
		type: Number,
		required: true
	},
	"sinov_maydoni": {
		type: Number,
		required: true
	},
	"pudrat": {
		type: Number,
		required: true
	},
	"xamkorlik_shartnomasi": {
		type: Number,
		required: true
	},
	"asosiy_vosita": {
		type: Number,
		required: true
	},
	"foydalanil_bino": {
		type: Number,
		required: true
	},
	"foydalanilma_bino": {
		type: Number,
		required: true
	},
	"yengil_avto": {
		type: Number,
		required: true
	},
	"yuk_avto": {
		type: Number,
		required: true
	},
	"boshqa_avto": {
		type: Number,
		required: true
	},
	"yurar_avto": {
		type: Number,
		required: true
	},
	"tirkamali_avto": {
		type: Number,
		required: true
	},
	"invinlab": {
		type: Number,
		required: true
	},
	"boshqalab": {
		type: Number,
		required: true
	},
	"mebel": {
		type: Number,
		required: true
	},
	"smeta": {
		type: Number,
		required: true
	},
	"birinchi": {
		type: Number,
		required: true
	},
	"ikkinchi": {
		type: Number,
		required: true
	},
	"uchinchi": {
		type: Number,
		required: true
	},
	"xodimlar_soni": {
		type: Number,
		required: true
	},
	"boshqaruv_xodim": {
		type: Number,
		required: true
	},
	"tarkibiy_xodimlar": {
		type: Number,
		required: true
	},
	"texnik_xodim": {
		type: Number,
		required: true
	},
	"shartnoma_xodim": {
		type: Number,
		required: true
	},
	"vakant": {
		type: Number,
		required: true
	},
	"vakant_boshqaruv": {
		type: Number,
		required: true
	},
	"vakant_ilmiy": {
		type: Number,
		required: true
	},
	"vakant_texnik": {
		type: Number,
		required: true
	},
	"ilmiy_loyihalar": {
		type: Number,
		required: true
	},
	"buyurtma_loyihalar": {
		type: Number,
		required: true
	},
	"grant_loyihalar": {
		type: Number,
		required: true
	},
	"boshqa_loyihalar": {
		type: Number,
		required: true
	},
	"ortacha_oylik": {
		type: Number,
		required: true
	},
	"boshqaruv_oylik": {
		type: Number,
		required: true
	},
	"tarkibi_oylik": {
		type: Number,
		required: true
	},
	"texnik_oylik": {
		type: Number,
		required: true
	},
	"fuqarolik_oylik": {
		type: Number,
		required: true
	},
	"reja": {
		type: Number,
		required: true
	},
	"ijara_yer": {
		type: Number,
		required: true
	},
	"bino_yer": {
		type: Number,
		required: true
	},
	"sotish_maxsulot": {
		type: Number,
		required: true
	},
	"kochat_sotish": {
		type: Number,
		required: true
	},
	"xizmar_korsatish": {
		type: Number,
		required: true
	},
	"boshqa_yonalish": {
		type: Number,
		required: true
	},
	"tushgan_mablag": {
		type: Number,
		required: true
	},
	"birinchi_mablag": {
		type: Number,
		required: true
	},
	"ikkinchi_mablag": {
		type: Number,
		required: true
	},
	"uchinchi_mablag": {
		type: Number,
		required: true
	},
}, { timestamps: true });

const UserData = mongoose.model('User', userSchema);

// export default UserData schema;
module.exports = UserData;