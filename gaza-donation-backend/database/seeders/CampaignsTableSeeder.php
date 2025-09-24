<?php

namespace Database\Seeders;


use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CampaignsTableSeeder extends Seeder
{
    public function run(): void
    {
        DB::table('campaigns')->truncate();
         DB::table('campaigns')->insert([
         [
        'id'=>'1',
        'title_ar' => 'خبزٌ يطعم الجائعين في غزة',
        'title_en' => 'Bread to Feed the Hungry in Gaza Campaign',
        'description_ar' => 'في ظلّ الحصار والمعاناة اليومية التي يعيشها أهل غزة، أصبح الحصول على الخبز تحديًا حقيقيًا لعائلات بأكملها. آلاف الأطفال ينامون جائعين، وأمهات لا يجدن ما يُقدمنه لصغارهن.
        تبرعك اليوم يمكن أن يُوفر لهم الخبز الذي يسدّ الجوع، ويعيد شيئًا من الكرامة لحياتهم... ساهم الآن، وكن سببًا في إشباع جائع.',
        'description_en' => 'In Gaza, where war and blockade have left families in despair, even basic food like bread has become a struggle to find.
        Thousands of children go to bed hungry, and parents are helpless... Your donation today can help provide daily bread for those who need it most... Give hope. Give bread. Donate now.',
        'image_url' => 'http://localhost:5173/images/p.png',
        'created_at' => now(),
        'updated_at' => now(),
         ],
         [
        'id'=>'4',
        'title_ar' => 'قطرة حليب... تنقذ حياة رضيع ',
        'title_en' => 'Milk for Gaza"s Infants A Lifesaving Drop',
        'description_ar' => 'في غزة، لا تملك كثير من الأمهات ما يكفي لإطعام أطفالهن الرضّع.  الحصار والدمار جعل من الحليب سلعة نادرة، وثمينة تفوق قدرات العائلات المنكوبة.  هناك رضّع يبكون جوعًا ولا يجدون قطرة حليب تُسكّن ألمهم. تبرعك اليوم يُمكن أن يكون الفارق بين الحياة والموت لطفل بريء. ساهم في إنقاذ الأرواح الصغيرة. كن سببًا في البقاء.',
        'description_en' => 'In Gaza, many mothers can’t find or afford baby formula for their infants. Due to siege and poverty, milk has become a luxury out of reach.Babies cry in hunger, with no relief in sight.
        Your donation today could be the reason a baby survives... Be their lifeline. Donate milk. Save a life.',
        'image_url' => 'http://localhost:5173/images/1.jpeg',
        'created_at' => now(),
        'updated_at' => now(),
         ],
         [
        'id'=>'3',    
        'title_ar' => 'سلّة غذاء تُعيد الحياة لعائلة في غزة',
        'title_en' => 'Food Basket for Gaza .. Feed a Family Today',
        'description_ar' => 'في غزة،  العائلات لا تملك ما تضعه على مائدة الطعام.  الجوع لا يطرق الباب مرةً واحدة... بل كل يوم.  من خلال هذه الحملة، نوفّر كابونة غذائية (سلّة مواد أساسية) تحتوي على:أرز، طحين، زيت، عدس، سكر، معلبات، وبعض المواد الأساسية 
        التي تكفي الأسرة لمدة أسبوعين على الأقل. بتبرعك تُنقذ عائلة من الجوع،   وتمنحهم أملًا في وقتٍ خذلهم فيه كل شيء. كن سببًا في إشباع الجائعين.. وشارك الآن.',
        'description_en' => 'families in Gaza go to bed hungry every night. Hunger is not a one-time visitor—it comes every day. This campaign provides a complete food basket (coupon) with essentials like: rice, flour, oil, lentils, sugar, canned food — enough to support a family for at least two weeks.
        you can fill an empty table and give hope to a struggling household. Be the reason they eat today. Donate a food basket.',
        'image_url' => 'http://localhost:5173/images/0.jpeg',
        'created_at' => now(),
        'updated_at' => now(),
         ],
         [
        'id'=>'2',
        'title_ar' => ' دواء ينقذ.. لا تتركهم يتألمون',
        'title_en' => ' ',
        'description_ar' => 'في غزة، الجروح لا تلتئم، والمرضى ينتظرون جرعة دواء قد لا تأتي.  هناك مرضى سكّري، سرطان، ربو، وأطفال يعانون من الحمى والالتهابات... ولا دواء.  المستشفيات عاجزة، والصيدليات شبه فارغة. تبرعك اليوم يعني حياة بلا ألم، يعني شفاء لطفل أو راحة لمُسن.
         هدفنا توفير دواءً لمريض لا يستطيع شراءه.  كن أملًا في زمن القهر.. وشارك في إنقاذ الأرواح.',
        'description_en' => 'In Gaza, the sick suffer silently..Hospitals lack supplies, and pharmacies are nearly empty.Chronic patients – diabetes, asthma, cancer – go without medicine.
        Your donation can relieve pain, restore dignity, and even save lives. we trying to provide vital medicine for someone in desperate need..Give them a chance. Send healing. Donate medicine.',
        'image_url' => 'http://localhost:5173/images/4.jpeg',
        'created_at' => now(),
        'updated_at' => now(),
         ],
         [
        'id'=>'5',
        'title_ar' => ' أطفال غزة بحاجة لكرامة.. ساعد بتوفير الحفاضات',
        'title_en' => 'Dignity for Gaza"s Babies... Provide Diapers Today"',
        'description_ar' => 'في ظلّ الحصار والدمار، لا تجد كثير من الأمهات في غزة ما يُبقِي أطفالهن الرُضّع في نظافة وراحة.   الحفاضات أصبحت عبئًا ماديًا لا يُطاق، ومع غياب الدعم، يضطر البعض لاستخدام بدائل غير صحية تُعرض الأطفال للالتهابات والأمراض.
        تبرعك الآن يمكن أن يوفّر الراحة والنظافة لرضيع صغير، ويمنح أمًا كرامة وطمأنينة.  لا شيء صغير في العطاء، فكل تفصيل يصنع فرقًا في حياة طفل.',
        'description_en' => 'In Gaza, many mothers struggle to provide clean diapers for their babies. The cost is overwhelming, and some are forced to use unsafe alternatives.This leads to infections, discomfort, and suffering for the youngest lives.
        Your donation can bring comfort, hygiene, and dignity to a child and their mother.Every small gift makes a big difference. Help now.',
        'image_url' => 'http://localhost:5173/images/2.jpeg',
        'created_at' => now(),
        'updated_at' => now(),
         ]
         ]
         
        
    );
    }
}



