// Importing mongoose
const mongoose = require('mongoose');

// Calling mongoose schema
const Schema = mongoose.Schema;

// Creating data schema
const userSchema = new Schema({
	"stir": {
		type: String,
		required: true,
		unique: true
	},
	"tel_raqami": {
		type: String,
		required: false
	},
	"rasmiy_nomi": {
		type: String,
		required: false
	},
	"tashkil_yili": {
		type: String,
		required: false
	},
	"qaror": {
		type: String,
		required: false
	},
	"faoliyat_turi": {
		type: String,
		required: false
	},
	"boshqaruv_shakli": {
		type: String,
		required: false
	},
	"ustav": {
		type: Number,
		required: false
	},
	"tasischi": {
		type: String,
		required: false
	},
	"tashkilot_soni": {
		type: Number,
		required: false
	},
	"tashkilot_raxbari_ismi": {
		type: String,
		required: false
	},
	"tashkilot_raxbari_nomeri": {
		type: Number,
		required: false
	},
	"tashkilot_bosh_xisobchisi": {
		type: String,
		required: false
	},
	"tashkilot_xisobchi_nomeri": {
		type: Number,
		required: false
	},
	"yuridik_manzili": {
		type: String,
		required: false
	},
	"joylashgan_manzili": {
		type: String,
		required: false
	},
	"vebsayt_nomi": {
		type: String,
		required: false
	},
	"asosiy_raqam": {
		type: Number,
		required: false
	},
	"bank_nomi": {
		type: String,
		required: false
	},
	"xisob_raqam": {
		type: Number,
		required: false
	},
	"tashqari_xisob_raqam": {
		type: Number,
		required: false
	},
	"tijorat_xisob_raqam": {
		type: Number,
		required: false
	},
	"umumiy_yer": {
		type: Number,
		required: false
	},
	"paxta": {
		type: Number,
		required: false
	},
	"galla": {
		type: Number,
		required: false
	},
	"issiqxona": {
		type: Number,
		required: false
	},
	"bog_maydoni": {
		type: Number,
		required: false
	},
	"tokzor": {
		type: Number,
		required: false
	},
	"poliz": {
		type: Number,
		required: false
	},
	"sinov_maydoni": {
		type: Number,
		required: false
	},
	"pudrat": {
		type: Number,
		required: false
	},
	"xamkorlik_shartnomasi": {
		type: Number,
		required: false
	},
	"asosiy_vosita": {
		type: Number,
		required: false
	},
	"foydalanil_bino": {
		type: Number,
		required: false
	},
	"foydalanilma_bino": {
		type: Number,
		required: false
	},
	"yengil_avto": {
		type: Number,
		required: false
	},
	"yuk_avto": {
		type: Number,
		required: false
	},
	"boshqa_avto": {
		type: Number,
		required: false
	},
	"yurar_avto": {
		type: Number,
		required: false
	},
	"tirkamali_avto": {
		type: Number,
		required: false
	},
	"invinlab": {
		type: Number,
		required: false
	},
	"boshqalab": {
		type: Number,
		required: false
	},
	"mebel": {
		type: Number,
		required: false
	},
	"smeta": {
		type: Number,
		required: false
	},
	"birinchi": {
		type: Number,
		required: false
	},
	"ikkinchi": {
		type: Number,
		required: false
	},
	"uchinchi": {
		type: Number,
		required: false
	},
	"xodimlar_soni": {
		type: Number,
		required: false
	},
	"boshqaruv_xodim": {
		type: Number,
		required: false
	},
	"tarkibiy_xodimlar": {
		type: Number,
		required: false
	},
	"texnik_xodim": {
		type: Number,
		required: false
	},
	"shartnoma_xodim": {
		type: Number,
		required: false
	},
	"vakant": {
		type: Number,
		required: false
	},
	"vakant_boshqaruv": {
		type: Number,
		required: false
	},
	"vakant_ilmiy": {
		type: Number,
		required: false
	},
	"vakant_texnik": {
		type: Number,
		required: false
	},
	"ilmiy_loyihalar": {
		type: Number,
		required: false
	},
	"buyurtma_loyihalar": {
		type: Number,
		required: false
	},
	"grant_loyihalar": {
		type: Number,
		required: false
	},
	"boshqa_loyihalar": {
		type: Number,
		required: false
	},
	"ortacha_oylik": {
		type: Number,
		required: false
	},
	"boshqaruv_oylik": {
		type: Number,
		required: false
	},
	"tarkibi_oylik": {
		type: Number,
		required: false
	},
	"texnik_oylik": {
		type: Number,
		required: false
	},
	"fuqarolik_oylik": {
		type: Number,
		required: false
	},
	"reja": {
		type: Number,
		required: false
	},
	"ijara_yer": {
		type: Number,
		required: false
	},
	"bino_yer": {
		type: Number,
		required: false
	},
	"sotish_maxsulot": {
		type: Number,
		required: false
	},
	"kochat_sotish": {
		type: Number,
		required: false
	},
	"xizmar_korsatish": {
		type: Number,
		required: false
	},
	"boshqa_yonalish": {
		type: Number,
		required: false
	},
	"tushgan_mablag": {
		type: Number,
		required: false
	},
	"birinchi_mablag": {
		type: Number,
		required: false
	},
	"ikkinchi_mablag": {
		type: Number,
		required: false
	},
	"uchinchi_mablag": {
		type: Number,
		required: false
	},
}, { timestamps: true, strict: false, strictQuery: false });

const UserData = mongoose.model('User', userSchema);

// export default UserData schema;
module.exports = UserData;