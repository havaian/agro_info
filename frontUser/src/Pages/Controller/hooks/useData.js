import { useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { request } from '../../../service';
import { useNavigate } from 'react-router-dom';

export default function useData() {
  const navigate = useNavigate();
  const {
    handleSubmit,
    control,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
  });

  const { mutate, isLoading } = useMutation(
    async (data) =>
      request.put(
        '/organisation/update/' + localStorage.getItem('statStir'),
        data
      ),
    {
      onSuccess: (response) => {
        console.log(response);
        navigate('/status');
      },
      onError: (error) => {
        console.log(error);
      },
    }
  );

  function clickHandle(data) {
    const { stir, createdAt, updatedAt, ...res } = data;
    mutate({ ...res, stir: localStorage.getItem('statStir') });
  }

  const main = [
    {
      label: 'Rasmiy nomi',
      name: 'rasmiy_nomi',
      type: 'text',
      placeholder: 'Rasmiy nomini kiriting',
      rules: {
        required: { value: true, message: "Maydonni to'ldiring" },
      },
      size: { sm: 12, md: 6, xl: 6 },
    },
    {
      label: 'Tashkil etilgan yili',
      name: 'tashkil_yili',
      type: 'date',
      placeholder: '12.05.1999',
      rules: {
        required: { value: true, message: "Maydonni to'ldiring" },
      },
      size: { sm: 12, md: 6, xl: 6 },
    },
    {
      label: 'Tashkil etilganligi buyicha qaror',
      name: 'qaror',
      type: 'text',
      placeholder: 'Tashkil etilganligi buyicha qaror',
      rules: {
        required: { value: true, message: "Maydonni to'ldiring" },
      },
      size: { sm: 12, md: 6, xl: 6 },
    },
    {
      label: 'Asosiy faoliyat turi',
      name: 'faoliyat_turi',
      type: 'text',
      placeholder: 'Asosiy faoliyat turi',
      rules: {
        required: { value: true, message: "Maydonni to'ldiring" },
      },
      size: { sm: 12, md: 6, xl: 6 },
    },
    {
      label: 'Tashkilotning boshqaruv shakli',
      name: 'boshqaruv_shakli',
      type: 'text',
      placeholder: 'Tashkilotning boshqaruv shakli',
      rules: {
        required: { value: true, message: "Maydonni to'ldiring" },
      },
      size: { sm: 12, md: 6, xl: 6 },
    },
    {
      label: 'Ustav kapitali (mln.sumda)',
      name: 'ustav',
      type: 'text',
      placeholder: '1 000 000',
      rules: {
        required: { value: true, message: "Maydonni to'ldiring" },
        minLength: {
          value: 0,
          message: 'O dan kichik raqam kiritish mumkun emas',
        },
        min: { value: 0, message: 'O dan kichik raqam kiritish mumkun emas' },
      },
      size: { sm: 12, md: 6, xl: 6 },
    },
    {
      label: 'Tashkilot tasischilari',
      name: 'tasischi',
      type: 'text',
      placeholder: 'Tashkilot tasischilari',
      rules: {
        required: { value: true, message: "Maydonni to'ldiring" },
        minLength: {
          value: 0,
          message: 'O dan kichik raqam kiritish mumkun emas',
        },
        min: { value: 0, message: 'O dan kichik raqam kiritish mumkun emas' },
      },
      size: { sm: 12, md: 6, xl: 6 },
    },
    {
      label: 'Tizimdagi tashkilotlar soni',
      name: 'tashkilot_soni',
      type: 'number',
      placeholder: 'Tizimdagi tashkilotlar soni',
      rules: {
        required: { value: true, message: "Maydonni to'ldiring" },
        minLength: {
          value: 0,
          message: 'O dan kichik raqam kiritish mumkun emas',
        },
        min: { value: 0, message: 'O dan kichik raqam kiritish mumkun emas' },
      },
      size: { sm: 12, md: 6, xl: 6 },
    },
    {
      label: 'Tashkilot raxbari F.I.Sh ',
      name: 'tashkilot_raxbari_ismi',
      type: 'text',
      placeholder: 'Tashkilot raxbari F.I.Sh ',
      rules: {
        required: { value: true, message: "Maydonni to'ldiring" },
      },
      size: { sm: 12, md: 6, xl: 6 },
    },
    {
      label: 'Tashkilot raxbari nomeri ',
      name: 'tashkilot_raxbari_nomeri',
      type: 'number',
      placeholder: '998901236567',
      rules: {
        required: { value: true, message: "Maydonni to'ldiring" },
        minLength: { value: 12, message: 'Telefon raqam 12tadan kam bolmasin' },
        maxLength: { value: 12, message: 'Telefon raqam 12tadan kop bolmasin' },
      },
      size: { sm: 12, md: 6, xl: 6 },
    },
    {
      label: 'Tashkilot bosh xisobchisi',
      name: 'tashkilot_bosh_xisobchisi',
      type: 'text',
      placeholder: 'Tashkilot bosh xisobchisi F.I.SH',
      rules: {
        required: { value: true, message: "Maydonni to'ldiring" },
      },
      size: { sm: 12, md: 6, xl: 6 },
    },
    {
      label: 'Tashkilot bosh xisobchisi telefon raqami',
      name: 'tashkilot_xisobchi_nomeri',
      type: 'number',
      placeholder: '998901236567',
      rules: {
        required: { value: true, message: "Maydonni to'ldiring" },
        minLength: { value: 12, message: 'Telefon raqam 12tadan kam bolmasin' },
        maxLength: { value: 12, message: 'Telefon raqam 12tadan kop bolmasin' },
      },
      size: { sm: 12, md: 6, xl: 6 },
    },
    {
      label: 'Yuridik manzili',
      name: 'yuridik_manzili',
      type: 'text',
      placeholder: 'Yuridik manzili',
      rules: {
        required: { value: true, message: "Maydonni to'ldiring" },
      },
      size: { sm: 12, md: 6, xl: 6 },
    },
    {
      label: 'Joylashgan manzili',
      name: 'joylashgan_manzili',
      type: 'text',
      placeholder: 'Joylashgan manzili',
      rules: {
        required: { value: true, message: "Maydonni to'ldiring" },
      },
      size: { sm: 12, md: 6, xl: 6 },
    },
    {
      label: 'Rasmiy veb-sayti nomi',
      name: 'vebsayt_nomi',
      type: 'text',
      placeholder: 'Rasmiy veb-sayti nomi',
      rules: {
        required: { value: true, message: "Maydonni to'ldiring" },
      },
      size: { sm: 12, md: 6, xl: 6 },
    },
    {
      label: 'Asosiy telefon raqami',
      name: 'asosiy_raqam',
      type: 'number',
      placeholder: '998901236567',
      rules: {
        required: { value: true, message: "Maydonni to'ldiring" },
        minLength: { value: 12, message: 'Telefon raqam 12tadan kam bolmasin' },
        maxLength: { value: 12, message: 'Telefon raqam 12tadan kop bolmasin' },
      },
      size: { sm: 12, md: 6, xl: 6 },
    },
    {
      label: 'STIR',
      name: 'stir',
      type: 'number',
      placeholder: 'stir',
      rules: {
        required: { value: true, message: "Maydonni to'ldiring" },
        minLength: {
          value: 0,
          message: 'O dan kichik raqam kiritish mumkun emas',
        },
        min: { value: 0, message: 'O dan kichik raqam kiritish mumkun emas' },
      },
      size: { sm: 12, md: 6, xl: 6 },
    },
    {
      label: 'Xizmat ko’rsatuvchi bank nomi',
      name: 'bank_nomi',
      type: 'text',
      placeholder: 'Xizmat ko’rsatuvchi bank nomi',
      rules: {
        required: { value: true, message: "Maydonni to'ldiring" },
      },
      size: { sm: 12, md: 6, xl: 6 },
    },
  ];
  const xisobRaqam = [
    {
      label: 'Byudjet xisob raqamlari',
      name: 'xisob_raqam',
      type: 'number',
      placeholder: 'Byudjet xisob raqamlari',
      rules: {
        required: { value: true, message: "Maydonni to'ldiring" },
        minLength: {
          value: 0,
          message: 'O dan kichik raqam kiritish mumkun emas',
        },
        min: { value: 0, message: 'O dan kichik raqam kiritish mumkun emas' },
      },
      size: { sm: 12, md: 6, xl: 4 },
    },
    {
      label: 'Byudjetdan tashkari xisob raqamlari',
      name: 'tashqari_xisob_raqam',
      type: 'number',
      placeholder: 'Byudjetdan tashkari xisob raqamlari',
      rules: {
        required: { value: true, message: "Maydonni to'ldiring" },
        minLength: {
          value: 0,
          message: 'O dan kichik raqam kiritish mumkun emas',
        },
        min: { value: 0, message: 'O dan kichik raqam kiritish mumkun emas' },
      },
      size: { sm: 12, md: 6, xl: 4 },
    },
    {
      label: 'Tijorat bankarida ochilgan xisob raqamlar',
      name: 'tijorat_xisob_raqam',
      type: 'number',
      placeholder: 'Tijorat bankarida ochilgan xisob raqamlar',
      rules: {
        required: { value: true, message: "Maydonni to'ldiring" },
        minLength: {
          value: 0,
          message: 'O dan kichik raqam kiritish mumkun emas',
        },
        min: { value: 0, message: 'O dan kichik raqam kiritish mumkun emas' },
      },
      size: { sm: 12, md: 6, xl: 4 },
    },
  ];
  const umumiyYerTashkilot = [
    {
      label: 'Umumiy yer maydoni (ga)',
      name: 'umumiy_yer',
      type: 'number',
      placeholder: 'Umumiy yer maydoni ',
      rules: {
        required: { value: true, message: "Maydonni to'ldiring" },
        minLength: {
          value: 0,
          message: 'O dan kichik raqam kiritish mumkun emas',
        },
        min: { value: 0, message: 'O dan kichik raqam kiritish mumkun emas' },
      },
      size: { sm: 12, md: 6, xl: 6 },
    },
    {
      label: 'Paxta maydonlari (ga)',
      name: 'paxta',
      type: 'number',
      placeholder: 'Paxta maydonlari ',
      rules: {
        required: { value: true, message: "Maydonni to'ldiring" },
        minLength: {
          value: 0,
          message: 'O dan kichik raqam kiritish mumkun emas',
        },
        min: { value: 0, message: 'O dan kichik raqam kiritish mumkun emas' },
      },
      size: { sm: 12, md: 6, xl: 6 },
    },
    {
      label: 'G’alla maydonlari (ga)',
      name: 'galla',
      type: 'number',
      placeholder: 'G’alla maydonlari ',
      rules: {
        required: { value: true, message: "Maydonni to'ldiring" },
        minLength: {
          value: 0,
          message: 'O dan kichik raqam kiritish mumkun emas',
        },
        min: { value: 0, message: 'O dan kichik raqam kiritish mumkun emas' },
      },
      size: { sm: 12, md: 6, xl: 6 },
    },
    {
      label: 'Issiqxona (ga)',
      name: 'issiqxona',
      type: 'number',
      placeholder: 'Issiqxona ',
      rules: {
        required: { value: true, message: "Maydonni to'ldiring" },
        minLength: {
          value: 0,
          message: 'O dan kichik raqam kiritish mumkun emas',
        },
        min: { value: 0, message: 'O dan kichik raqam kiritish mumkun emas' },
      },
      size: { sm: 12, md: 6, xl: 6 },
    },
    {
      label: 'Bog’ maydonlari (ga)',
      name: 'bog_maydoni',
      type: 'number',
      placeholder: 'Bog’ maydonlari ',
      rules: {
        required: { value: true, message: "Maydonni to'ldiring" },
        minLength: {
          value: 0,
          message: 'O dan kichik raqam kiritish mumkun emas',
        },
        min: { value: 0, message: 'O dan kichik raqam kiritish mumkun emas' },
      },
      size: { sm: 12, md: 6, xl: 6 },
    },
    {
      label: 'Tokzor maydonlari (ga)',
      name: 'tokzor',
      type: 'number',
      placeholder: 'Tokzor maydonlari ',
      rules: {
        required: { value: true, message: "Maydonni to'ldiring" },
        minLength: {
          value: 0,
          message: 'O dan kichik raqam kiritish mumkun emas',
        },
        min: { value: 0, message: 'O dan kichik raqam kiritish mumkun emas' },
      },
      size: { sm: 12, md: 6, xl: 6 },
    },
    {
      label: 'Poliz maydonlari',
      name: 'poliz',
      type: 'number',
      placeholder: 'Poliz maydonlari',
      rules: {
        required: { value: true, message: "Maydonni to'ldiring" },
        minLength: {
          value: 0,
          message: 'O dan kichik raqam kiritish mumkun emas',
        },
        min: { value: 0, message: 'O dan kichik raqam kiritish mumkun emas' },
      },
      size: { sm: 12, md: 6, xl: 6 },
    },
    {
      label: 'Tajriba sinov maydonlari (ga)',
      name: 'sinov_maydoni',
      type: 'number',
      placeholder: 'Tajriba sinov maydonlari',
      rules: {
        required: { value: true, message: "Maydonni to'ldiring" },
        minLength: {
          value: 0,
          message: 'O dan kichik raqam kiritish mumkun emas',
        },
        min: { value: 0, message: 'O dan kichik raqam kiritish mumkun emas' },
      },
      size: { sm: 12, md: 6, xl: 6 },
    },
  ];
  const umumiyYerIjara = [
    {
      label: 'Pudrat shartnomalari bo’yicha (mln.sumda)',
      name: 'pudrat',
      type: 'number',
      placeholder: '1 000 000',
      rules: {
        required: { value: true, message: "Maydonni to'ldiring" },
        minLength: {
          value: 0,
          message: 'O dan kichik raqam kiritish mumkun emas',
        },
        min: { value: 0, message: 'O dan kichik raqam kiritish mumkun emas' },
      },
      size: { sm: 12, md: 6, xl: 6 },
    },
    {
      label: 'Xamkorilik shartnomalari bo’yicha (mln.sumda)',
      name: 'xamkorlik_shartnomasi',
      type: 'number',
      placeholder: '1 000 000',
      rules: {
        required: { value: true, message: "Maydonni to'ldiring" },
        minLength: {
          value: 0,
          message: 'O dan kichik raqam kiritish mumkun emas',
        },
        min: { value: 0, message: 'O dan kichik raqam kiritish mumkun emas' },
      },
      size: { sm: 12, md: 6, xl: 6 },
    },
  ];
  const asosiy = [
    {
      label: 'Asosiy vositalar (mln.sumda)',
      name: 'asosiy_vosita',
      type: 'number',
      placeholder: '1 000 000',
      rules: {
        required: { value: true, message: "Maydonni to'ldiring" },
        minLength: {
          value: 0,
          message: 'O dan kichik raqam kiritish mumkun emas',
        },
        min: { value: 0, message: 'O dan kichik raqam kiritish mumkun emas' },
      },
      size: { sm: 12, md: 6, xl: 4 },
    },
    {
      label: 'Foydalanilayotgan bino inshoatlar (m2)',
      name: 'foydalanil_bino',
      type: 'number',
      placeholder: '100 m2',
      rules: {
        required: { value: true, message: "Maydonni to'ldiring" },
        minLength: {
          value: 0,
          message: 'O dan kichik raqam kiritish mumkun emas',
        },
        min: { value: 0, message: 'O dan kichik raqam kiritish mumkun emas' },
      },
      size: { sm: 12, md: 6, xl: 4 },
    },
    {
      label: 'Foydalanilmayotgan bino inshoatlar (m2)',
      name: 'foydalanilma_bino',
      type: 'number',
      placeholder: '100 m2',
      rules: {
        required: { value: true, message: "Maydonni to'ldiring" },
        minLength: {
          value: 0,
          message: 'O dan kichik raqam kiritish mumkun emas',
        },
        min: { value: 0, message: 'O dan kichik raqam kiritish mumkun emas' },
      },
      size: { sm: 12, md: 6, xl: 4 },
    },
    {
      label: 'Yengil avto transport vositalari (mln.sumda)',
      name: 'yengil_avto',
      type: 'number',
      placeholder: '1 000 000',
      rules: {
        required: { value: true, message: "Maydonni to'ldiring" },
        minLength: {
          value: 0,
          message: 'O dan kichik raqam kiritish mumkun emas',
        },
        min: { value: 0, message: 'O dan kichik raqam kiritish mumkun emas' },
      },
      size: { sm: 12, md: 6, xl: 4 },
    },
    {
      label: 'Yuk transport vositalari (mln.sumda)',
      name: 'yuk_avto',
      type: 'number',
      placeholder: '1 000 000',
      rules: {
        required: { value: true, message: "Maydonni to'ldiring" },
        minLength: {
          value: 0,
          message: 'O dan kichik raqam kiritish mumkun emas',
        },
        min: { value: 0, message: 'O dan kichik raqam kiritish mumkun emas' },
      },
      size: { sm: 12, md: 6, xl: 4 },
    },
    {
      label: 'Boshqa transport vositalari (mln.sumda)',
      name: 'boshqa_avto',
      type: 'number',
      placeholder: '1 000 000',
      rules: {
        required: { value: true, message: "Maydonni to'ldiring" },
        minLength: {
          value: 0,
          message: 'O dan kichik raqam kiritish mumkun emas',
        },
        min: { value: 0, message: 'O dan kichik raqam kiritish mumkun emas' },
      },
      size: { sm: 12, md: 6, xl: 4 },
    },
    {
      label: "O'zi yurar qishloq xo'jaligi texnikalari ",
      name: 'yurar_avto',
      type: 'number',
      placeholder: '1 000 000',
      rules: {
        required: { value: true, message: "Maydonni to'ldiring" },
        minLength: {
          value: 0,
          message: 'O dan kichik raqam kiritish mumkun emas',
        },
        min: { value: 0, message: 'O dan kichik raqam kiritish mumkun emas' },
      },
      size: { sm: 12, md: 6, xl: 4 },
    },
    {
      label: "Tirkama qishloq xo'jaligi texnikalari (mln.sumda)",
      name: 'tirkamali_avto',
      type: 'number',
      placeholder: '1 000 000',
      rules: {
        required: { value: true, message: "Maydonni to'ldiring" },
        minLength: {
          value: 0,
          message: 'O dan kichik raqam kiritish mumkun emas',
        },
        min: { value: 0, message: 'O dan kichik raqam kiritish mumkun emas' },
      },
      size: { sm: 12, md: 6, xl: 4 },
    },

    {
      label: 'Invintro laboratoriya jixozlari (mln.sumda)',
      name: 'invinlab',
      type: 'number',
      placeholder: '1 000 000',
      rules: {
        required: { value: true, message: "Maydonni to'ldiring" },
        minLength: {
          value: 0,
          message: 'O dan kichik raqam kiritish mumkun emas',
        },
        min: { value: 0, message: 'O dan kichik raqam kiritish mumkun emas' },
      },
      size: { sm: 12, md: 6, xl: 4 },
    },
    {
      label: 'Va boshqa laboratoriya jihozlari (mln.sumda)',
      name: 'boshqalab',
      type: 'number',
      placeholder: '1 000 000',
      rules: {
        required: { value: true, message: "Maydonni to'ldiring" },
        minLength: {
          value: 0,
          message: 'O dan kichik raqam kiritish mumkun emas',
        },
        min: { value: 0, message: 'O dan kichik raqam kiritish mumkun emas' },
      },
      size: { sm: 12, md: 6, xl: 6 },
    },
    {
      label: 'Mebel, orgtexnika va boshqa vositalar',
      name: 'mebel',
      type: 'number',
      placeholder: 'mln.sumda',
      rules: {
        required: { value: true, message: "Maydonni to'ldiring" },
      },
      size: { sm: 12, md: 6, xl: 6 },
    },
  ];
  const smeta = [
    {
      label: "Smeta bo'yicha 2023-yil uchun ajratilgan mablag' (mln.sumda)",
      name: 'smeta',
      type: 'number',
      placeholder: '1 000 000',
      rules: {
        required: { value: true, message: "Maydonni to'ldiring" },
        minLength: {
          value: 0,
          message: 'O dan kichik raqam kiritish mumkun emas',
        },
        min: { value: 0, message: 'O dan kichik raqam kiritish mumkun emas' },
      },
      size: { sm: 12, md: 6, xl: 6 },
    },
    {
      label: '1-guruh xarajatlari',
      name: 'birinchi',
      type: 'number',
      placeholder: '1 000 000',
      rules: {
        required: { value: true, message: "Maydonni to'ldiring" },
        minLength: {
          value: 0,
          message: 'O dan kichik raqam kiritish mumkun emas',
        },
        min: { value: 0, message: 'O dan kichik raqam kiritish mumkun emas' },
      },
      size: { sm: 12, md: 6, xl: 6 },
    },
    {
      label: '2-guruh xarajatlari',
      name: 'ikkinchi',
      type: 'number',
      placeholder: '1 000 000',
      rules: {
        required: { value: true, message: "Maydonni to'ldiring" },
        minLength: {
          value: 0,
          message: 'O dan kichik raqam kiritish mumkun emas',
        },
        min: { value: 0, message: 'O dan kichik raqam kiritish mumkun emas' },
      },
      size: { sm: 12, md: 6, xl: 6 },
    },
    {
      label: '3-guruh xarajatlari',
      name: 'uchinchi',
      type: 'number',
      placeholder: '1 000 000',
      rules: {
        required: { value: true, message: "Maydonni to'ldiring" },
        minLength: {
          value: 0,
          message: 'O dan kichik raqam kiritish mumkun emas',
        },
        min: { value: 0, message: 'O dan kichik raqam kiritish mumkun emas' },
      },
      size: { sm: 12, md: 6, xl: 6 },
    },
  ];
  const xodimlar = [
    {
      label: 'Faoliyat yuritayotgan xodimlar soni',
      name: 'xodimlar_soni',
      type: 'number',
      placeholder: 'Faoliyat yuritayotgan xodimlar soni',
      rules: {
        required: { value: true, message: "Maydonni to'ldiring" },
        minLength: {
          value: 0,
          message: 'O dan kichik raqam kiritish mumkun emas',
        },
        min: { value: 0, message: 'O dan kichik raqam kiritish mumkun emas' },
      },
      size: { sm: 12, md: 6, xl: 4 },
    },
    {
      label: 'Boshqaruv xodimlari soni ',
      name: 'boshqaruv_xodim',
      type: 'number',
      placeholder: 'Boshqaruv xodimlari soni',
      rules: {
        required: { value: true, message: "Maydonni to'ldiring" },
        minLength: {
          value: 0,
          message: 'O dan kichik raqam kiritish mumkun emas',
        },
        min: { value: 0, message: 'O dan kichik raqam kiritish mumkun emas' },
      },
      size: { sm: 12, md: 6, xl: 4 },
    },
    {
      label: 'Ilmiy xodimlar tarkibiy soni',
      name: 'tarkibiy_xodimlar',
      type: 'number',
      placeholder: 'Ilmiy xodimlar tarkibiy soni',
      rules: {
        required: { value: true, message: "Maydonni to'ldiring" },
        minLength: {
          value: 0,
          message: 'O dan kichik raqam kiritish mumkun emas',
        },
        min: { value: 0, message: 'O dan kichik raqam kiritish mumkun emas' },
      },
      size: { sm: 12, md: 6, xl: 4 },
    },
    {
      label: 'Texnik va ishchi xodimlar soni',
      name: 'texnik_xodim',
      type: 'number',
      placeholder: 'Texnik va ishchi xodimlar soni',
      rules: {
        required: { value: true, message: "Maydonni to'ldiring" },
        minLength: {
          value: 0,
          message: 'O dan kichik raqam kiritish mumkun emas',
        },
        min: { value: 0, message: 'O dan kichik raqam kiritish mumkun emas' },
      },
      size: { sm: 12, md: 6, xl: 6 },
    },
    {
      label: 'Fuqarolik xuquqiy shartnoma asosida ishlovchi xodimlar soni',
      name: 'shartnoma_xodim',
      type: 'number',
      placeholder:
        'Fuqarolik xuquqiy shartnoma asosida ishlovchi xodimlar soni',
      rules: {
        required: { value: true, message: "Maydonni to'ldiring" },
        minLength: {
          value: 0,
          message: 'O dan kichik raqam kiritish mumkun emas',
        },
        min: { value: 0, message: 'O dan kichik raqam kiritish mumkun emas' },
      },
      size: { sm: 12, md: 6, xl: 6 },
    },
  ];
  const vakant = [
    {
      label: 'Vakant ish o’rinlari soni',
      name: 'vakant',
      type: 'number',
      placeholder: 'Vakant ish o’rinlari soni',
      rules: {
        required: { value: true, message: "Maydonni to'ldiring" },
        minLength: {
          value: 0,
          message: 'O dan kichik raqam kiritish mumkun emas',
        },
        min: { value: 0, message: 'O dan kichik raqam kiritish mumkun emas' },
      },
      size: { sm: 12, md: 6, xl: 6 },
    },
    {
      label: 'Boshqaruv xodimlari soni',
      name: 'vakant_boshqaruv',
      type: 'number',
      placeholder: 'Boshqaruv xodimlari soni',
      rules: {
        required: { value: true, message: "Maydonni to'ldiring" },
        minLength: {
          value: 0,
          message: 'O dan kichik raqam kiritish mumkun emas',
        },
        min: { value: 0, message: 'O dan kichik raqam kiritish mumkun emas' },
      },
      size: { sm: 12, md: 6, xl: 6 },
    },
    {
      label: 'Ilmiy xodimlar tarkibiy soni',
      name: 'vakant_ilmiy',
      type: 'number',
      placeholder: 'Ilmiy xodimlar tarkibiy soni',
      rules: {
        required: { value: true, message: "Maydonni to'ldiring" },
        minLength: {
          value: 0,
          message: 'O dan kichik raqam kiritish mumkun emas',
        },
        min: { value: 0, message: 'O dan kichik raqam kiritish mumkun emas' },
      },
      size: { sm: 12, md: 6, xl: 6 },
    },
    {
      label: 'Texnik va ishchi xodimlar soni',
      name: 'vakant_texnik',
      type: 'number',
      placeholder: 'Texnik va ishchi xodimlar soni',
      rules: {
        required: { value: true, message: "Maydonni to'ldiring" },
        minLength: {
          value: 0,
          message: 'O dan kichik raqam kiritish mumkun emas',
        },
        min: { value: 0, message: 'O dan kichik raqam kiritish mumkun emas' },
      },
      size: { sm: 12, md: 6, xl: 6 },
    },
  ];
  const loyiha = [
    {
      label: 'Amalga oshirilayotgan ilmiy loyixalar  (mln.sumda)',
      name: 'ilmiy_loyihalar',
      type: 'number',
      placeholder: '1 000 000',
      rules: {
        required: { value: true, message: "Maydonni to'ldiring" },
        minLength: {
          value: 0,
          message: 'O dan kichik raqam kiritish mumkun emas',
        },
        min: { value: 0, message: 'O dan kichik raqam kiritish mumkun emas' },
      },
      size: { sm: 12, md: 6, xl: 6 },
    },
    {
      label:
        ' Oliy talim, fan va inovatsiya vazirligi byurtmasi loyihalari  (mln.sumda)',
      name: 'buyurtma_loyihalar',
      type: 'number',
      placeholder: 'Mln.sumda',
      rules: {
        required: { value: true, message: "Maydonni to'ldiring" },
        minLength: {
          value: 0,
          message: 'O dan kichik raqam kiritish mumkun emas',
        },
        min: { value: 0, message: 'O dan kichik raqam kiritish mumkun emas' },
      },
      size: { sm: 12, md: 6, xl: 6 },
    },
    {
      label: 'Xalqaro grant mablag’lari xisobidagi loyihalar  (mln.sumda)',
      name: 'grant_loyihalar',
      type: 'number',
      placeholder: 'Mln.sumda',
      rules: {
        required: { value: true, message: "Maydonni to'ldiring" },
        minLength: {
          value: 0,
          message: 'O dan kichik raqam kiritish mumkun emas',
        },
        min: { value: 0, message: 'O dan kichik raqam kiritish mumkun emas' },
      },
      size: { sm: 12, md: 6, xl: 6 },
    },
    {
      label: 'Va boshqa loyihalar  (mln.sumda)',
      name: 'boshqa_loyihalar',
      type: 'number',
      placeholder: 'Mln.sumda',
      rules: {
        required: { value: true, message: "Maydonni to'ldiring" },
        minLength: {
          value: 0,
          message: 'O dan kichik raqam kiritish mumkun emas',
        },
        min: { value: 0, message: 'O dan kichik raqam kiritish mumkun emas' },
      },
      size: { sm: 12, md: 6, xl: 6 },
    },
  ];
  const oylik = [
    {
      label: 'Xodimlarni o’rtacha oylik ish xaqqi (mln.sumda)',
      name: 'ortacha_oylik',
      type: 'number',
      placeholder: '1 000 000',
      rules: {
        required: { value: true, message: "Maydonni to'ldiring" },
        minLength: {
          value: 0,
          message: 'O dan kichik raqam kiritish mumkun emas',
        },
        min: { value: 0, message: 'O dan kichik raqam kiritish mumkun emas' },
      },
      size: { sm: 12, md: 6, xl: 4 },
    },
    {
      label: 'Boshqaruv xodimlari (mln.sumda)',
      name: 'boshqaruv_oylik',
      type: 'number',
      placeholder: '1 000 000',
      rules: {
        required: { value: true, message: "Maydonni to'ldiring" },
        minLength: {
          value: 0,
          message: 'O dan kichik raqam kiritish mumkun emas',
        },
        min: { value: 0, message: 'O dan kichik raqam kiritish mumkun emas' },
      },
      size: { sm: 12, md: 6, xl: 4 },
    },
    {
      label: 'Ilmiy xodimlar tarkibi (mln.sumda)',
      name: 'tarkibi_oylik',
      type: 'number',
      placeholder: '1 000 000',
      rules: {
        required: { value: true, message: "Maydonni to'ldiring" },
        minLength: {
          value: 0,
          message: 'O dan kichik raqam kiritish mumkun emas',
        },
        min: { value: 0, message: 'O dan kichik raqam kiritish mumkun emas' },
      },
      size: { sm: 12, md: 6, xl: 4 },
    },
    {
      label: 'Texnik va ishchi xodimlar (mln.sumda)',
      name: 'texnik_oylik',
      type: 'number',
      placeholder: '1 000 000',
      rules: {
        required: { value: true, message: "Maydonni to'ldiring" },
        minLength: {
          value: 0,
          message: 'O dan kichik raqam kiritish mumkun emas',
        },
        min: { value: 0, message: 'O dan kichik raqam kiritish mumkun emas' },
      },
      size: { sm: 12, md: 6, xl: 6 },
    },
    {
      label:
        'Fuqarolik xuquqiy shartnoma asosida ishlovchi xodimlar (mln.sumda)',
      name: 'fuqarolik_oylik',
      type: 'number',
      placeholder: '1 000 000',
      rules: {
        required: { value: true, message: "Maydonni to'ldiring" },
        minLength: {
          value: 0,
          message: 'O dan kichik raqam kiritish mumkun emas',
        },
        min: { value: 0, message: 'O dan kichik raqam kiritish mumkun emas' },
      },
      size: { sm: 12, md: 6, xl: 6 },
    },
  ];
  const daromad = [
    {
      label:
        'Qishloq xo’jaligi vazirligi tomonidan daromadlar bo’yicha reja (mln.sumda)',
      name: 'reja',
      type: 'number',
      placeholder: '1 000 000',
      rules: {
        required: { value: true, message: "Maydonni to'ldiring" },
        minLength: {
          value: 0,
          message: 'O dan kichik raqam kiritish mumkun emas',
        },
        min: { value: 0, message: 'O dan kichik raqam kiritish mumkun emas' },
      },
      size: { sm: 12, md: 6, xl: 6 },
    },
    {
      label: 'Yerlarni ijaraga berishdan (mln.sumda)',
      name: 'ijara_yer',
      type: 'number',
      placeholder: '1 000 000',
      rules: {
        required: { value: true, message: "Maydonni to'ldiring" },
        minLength: {
          value: 0,
          message: 'O dan kichik raqam kiritish mumkun emas',
        },
        min: { value: 0, message: 'O dan kichik raqam kiritish mumkun emas' },
      },
      size: { sm: 12, md: 6, xl: 6 },
    },
    {
      label: 'Bino inshoatlarni ijaraga berishdan (mln.sumda)',
      name: 'bino_yer',
      type: 'number',
      placeholder: '1 000 000',
      rules: {
        required: { value: true, message: "Maydonni to'ldiring" },
        minLength: {
          value: 0,
          message: 'O dan kichik raqam kiritish mumkun emas',
        },
        min: { value: 0, message: 'O dan kichik raqam kiritish mumkun emas' },
      },
      size: { sm: 12, md: 6, xl: 6 },
    },
    {
      label: 'Qishloq xo’jaligi maxsulotlarini sotishdan (mln.sumda)',
      name: 'sotish_maxsulot',
      type: 'number',
      placeholder: '1 000 000',
      rules: {
        required: { value: true, message: "Maydonni to'ldiring" },
        minLength: {
          value: 0,
          message: 'O dan kichik raqam kiritish mumkun emas',
        },
        min: { value: 0, message: 'O dan kichik raqam kiritish mumkun emas' },
      },
      size: { sm: 12, md: 6, xl: 6 },
    },
    {
      label: 'Ko’chatlarni sotishdan (mln.sumda)',
      name: 'kochat_sotish',
      type: 'number',
      placeholder: '1 000 000',
      rules: {
        required: { value: true, message: "Maydonni to'ldiring" },
        minLength: {
          value: 0,
          message: 'O dan kichik raqam kiritish mumkun emas',
        },
        min: { value: 0, message: 'O dan kichik raqam kiritish mumkun emas' },
      },
      size: { sm: 12, md: 6, xl: 4 },
    },
    {
      label: 'Qishloq xo’jaligi xizmatlari  (mln.sumda)',
      name: 'xizmar_korsatish',
      type: 'number',
      placeholder: '1 000 000',
      rules: {
        required: { value: true, message: "Maydonni to'ldiring" },
        minLength: {
          value: 0,
          message: 'O dan kichik raqam kiritish mumkun emas',
        },
        min: { value: 0, message: 'O dan kichik raqam kiritish mumkun emas' },
      },
      size: { sm: 12, md: 6, xl: 4 },
    },
    {
      label: "Va boshqalar yo'nlaishlar (mln.sumda)",
      name: 'boshqa_yonalish',
      type: 'number',
      placeholder: '1 000 000',
      rules: {
        required: { value: true, message: "Maydonni to'ldiring" },
        minLength: {
          value: 0,
          message: 'O dan kichik raqam kiritish mumkun emas',
        },
        min: { value: 0, message: 'O dan kichik raqam kiritish mumkun emas' },
      },
      size: { sm: 12, md: 6, xl: 4 },
    },
  ];
  const infos = [
    {
      label:
        'Byudjetdan tashqari xisob raqamiga kelib tushgan mablag’ (mln.sumda)',
      name: 'tushgan_mablag',
      type: 'number',
      placeholder: '1 000 000',
      rules: {
        required: { value: true, message: "Maydonni to'ldiring" },
      },
      size: { sm: 12, md: 6, xl: 6 },
    },
    {
      label: '2021 yilda (mln.sumda)',
      name: 'birinchi_mablag',
      type: 'number',
      placeholder: '1 000 000',
      rules: {
        required: { value: true, message: "Maydonni to'ldiring" },
      },
      size: { sm: 12, md: 6, xl: 6 },
    },
    {
      label: '2022 yilda (mln.sumda)',
      name: 'ikkinchi_mablag',
      type: 'number',
      placeholder: '1 000 000',
      rules: {
        required: { value: true, message: "Maydonni to'ldiring" },
      },
      size: { sm: 12, md: 6, xl: 6 },
    },
    {
      label: '2023 yilda (mln.sumda)',
      name: 'uchinchi_mablag',
      type: 'number',
      placeholder: '1 000 000',
      rules: {
        required: { value: true, message: "Maydonni to'ldiring" },
      },
      size: { sm: 12, md: 6, xl: 6 },
    },
  ];

  return {
    main,
    umumiyYerTashkilot,
    infos,
    xisobRaqam,
    handleSubmit,
    control,
    clickHandle,
    umumiyYerIjara,
    asosiy,
    smeta,
    xodimlar,
    vakant,
    loyiha,
    oylik,
    daromad,
    mutate,
    isLoading,
    reset,
  };
}
