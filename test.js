import test from 'ava';
import m from '.';

test('32-bit', t => {
	t.is(m('', 32), 2166136261);
	t.is(m('h', 32), 3977000791);
	t.is(m('he', 32), 1547363254);
	t.is(m('hel', 32), 179613742);
	t.is(m('hell', 32), 477198310);
	t.is(m('hello', 32), 1335831723);
});

test('64-bit', t => {
	t.is(m.bigInt('', {bits: 64}), BigInt('14695981039346656037'));
	t.is(m.bigInt('hello', {bits: 64}), BigInt('23615531076550004533854898275474062960111728987064870418154029787321558796778763'));
});

test('128-bit', t => {
	t.is(m.bigInt('', {bits: 128}), BigInt('144066263297769815596495629667062367629'));
	t.is(m.bigInt('hello', {bits: 128}), BigInt('409034918083539159923385244924325039087345165935255167470957453370586047789711812663854017581888772825295604317090165829516704083688346492206526843231778760277962650366387'));
});

test('256-bit', t => {
	t.is(m.bigInt('', {bits: 256}), BigInt('100029257958052580907070968620625704837092796014241193945225284501741471925557'));
	t.is(m.bigInt('hello', {bits: 256}), BigInt('733370446770435777491558563478136523663748771875501363189884780627405004866694535540355512636290096707106769729712002782047031818900002541160093341399803777916583071517908568752709803386114402023862518725166159885602137487656268494191791617100257939593249062612059892873193553196938552571746745891064792746986884338799042202854395'));
});

test('512-bit', t => {
	t.is(m.bigInt('', {bits: 512}), BigInt('9659303129496669498009435400716310466090418745672637896108374329434462657994582932197716438449813051892206539805784495328239340083876191928701583869517785'));
	t.is(m.bigInt('hello', {bits: 512}), BigInt('570871467717164169987308856895053975697977094412216671357439786924007124462647774382020553842357851960513788043699842331420270451032653131762430942941967571373700982880929637959145542244900869769558729781049256685433180571743188096994946751803467197823692064382851868409938279431202402579169288021896085387984943561386435359304078169687333124498992319308157253936572832268888172878943375361659425630750472855094546053986495400361218457249241721927484308706297892812882287265510384155039315888438930676362251047434459976208068791604706197624582612327655835447346871484326306982327858890941868382677727901035199359949487422400912677487980142916161661503213347197951173849559'));
});

test('1024-bit', t => {
	t.is(m.bigInt('', {bits: 1024}), BigInt('14197795064947621068722070641403218320880622795441933960878474914617582723252296732303717722150864096521202355549365628174669108571814760471015076148029755969804077320157692458563003215304957150157403644460363550505412711285966361610267868082893823963790439336411086884584107735010676915'));
	t.is(m.bigInt('hello', {bits: 1024}), BigInt('45103075917256198409075051196755065181853227572584330874576060336371379357060757623163064810853391581380875288646116415500383504874398412422184301992050389500158044141642860840562904184558643593535331603863559506462049472013383450052455542015168680139015802272410567443002389056046405661356772822575073339604223880726544732398407122405533459727261767296467868564841423320608822004220913884802918417510111751139604325536793701710110350375183900189911009644232250964645583451642918414039707486486628778987207988069900237492000000365547192015726150677332057967855693448810753870610916718762512905671637669550414859670542315866818094758819430033393454377367935591368392649215990241373192402101470583624625846388253440755713799856200492182718061508198845256590953944958889107667551553634319842264963457082838963719856712418068157032060179448236087066962767362414847667516303815007763432182035932912297740483064732374069367224069392390042322568764958661640814447323295280005374414292732632740012250234355584213918076194878045769608192209591903139002165691834919273812381541703414390341233720045501495113783612457212427728777573154198078530157426592670870074810572540868705947810274813121085903848968762739893640577137949615037690702270842041041381576615943072062698016437779084746222457229976091222031124991232994921'));
});
