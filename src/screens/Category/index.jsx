import { View } from "react-native";

import styles from "./styles";
import Header from "../../components/Header";
import Escolas from "../../components/Escolas";
import escola from "../../data/Escolas";
import lista from '../../Models/ListaEscolas'

export default function Category(route) {
  let { edit } = route.params;
  let user = escola;

  const [name, setName] = useState("");
  const [corPrimaria, setCorPrimaria] = useState('');
  const [corSecundaria, setCorSecundaria] = useState('');
  const [quantidadeFuncionarios, setQuantidadeFuncionarios] = useState('');
  const [capacidadeAlunosPorAno, setCapacidadeAlunosPorAno] = useState('');
  const [quantidadeTurmas, setQuantidadeTurmas] = useState('');
  const [bairro, setbairro] = useState('')
  const [numero, setnumero] = useState('')
  const [cidade, setcidade] = useState('')
  const [estado, setestado] = useState('')
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [responsavel, setResponsavel] = useState('');
  const [isUpdate, setIsUpdate] = useState(edit);

  const navigation = useNavigation();

  useEffect(() => {
    if (edit) {
      setName(user.name);
      setCorPrimaria(user.corPrimaria);
      setCorSecundaria(user.corSecundaria);
      setQuantidadeFuncionarios(user.quantidadeFuncionarios);
      setCapacidadeAlunosPorAno(user.capacidadeAlunosPorAno);
      setQuantidadeTurmas(user.quantidadeTurmas);
      setbairro(user.endereco.bairro);
      setnumero(user.endereco.numero);
      setcidade(user.endereco.cidade);
      setestado(user.endereco.estado);
      setTelefone(user.telefone);
      setEmail(user.email);
      setResponsavel(user.responsavel);
      setIsUpdate(true);
    } else {
      clearInputs();
    }
  }, [user, edit]);

  const EscolaAcao = () => {
    if (isUpdate) {
      lista.atualizarEscola(user.id, nome, date, corPrimaria, corSecundaria, quantidadeFuncionarios, capacidadeAlunosPorAno, quantidadeTurmas, endereco, telefone, email, responsavel);
      clearInputs();
    } else {
      const novaEscola = new Escola(nome, date, corPrimaria, corSecundaria, quantidadeFuncionarios, capacidadeAlunosPorAno, quantidadeTurmas, endereco, telefone, email, responsavel);
      lista.adicionarEscola(novaEscola);
      clearInputs();
    }
    navigation.navigate("Users");
  };

  const clearInputs = () => {
    edit = false;
    setIsUpdate(false);
    setName("");
    setCorPrimaria("");
    setCorSecundaria("");
    setQuantidadeFuncionarios("");
    setCapacidadeAlunosPorAno("");
    setQuantidadeTurmas("");
    setBairro("");
    setNumero("");
    setCidade("");
    setEstado("");
    setTelefone("");
    setEmail("");
    setResponsavel("");
  };
  return (
    <View style={styles.container}>
      <Title title={isUpdate ? "Editar Escola" : "Novo Escola"} />
      <TextInput
        placeholder="Digite o nome"
        onChangeText={setName}
        value={name}
      />
      <TextInput
        placeholder="Digite a cor primária"
        onChangeText={setCorPrimaria}
        value={corPrimaria}
      />
      <TextInput
        placeholder="Digite a cor secundária"
        onChangeText={setCorSecundaria}
        value={corSecundaria}
      />
      <TextInput
        placeholder="Digite a quantidade de funcionários"
        onChangeText={setQuantidadeFuncionarios}
        value={quantidadeFuncionarios}
        keyboardType="numeric"
      />
      <TextInput
        placeholder="Digite a capacidade de alunos por ano"
        onChangeText={setCapacidadeAlunosPorAno}
        value={capacidadeAlunosPorAno}
        keyboardType="numeric"
      />
      <TextInput
        placeholder="Digite a quantidade de turmas"
        onChangeText={setQuantidadeTurmas}
        value={quantidadeTurmas}
        keyboardType="numeric"
      />
      <TextInput
        placeholder="Digite o bairro"
        onChangeText={setbairro}
        value={bairro}
      />
      <TextInput
        placeholder="Digite o número"
        onChangeText={setnumero}
        value={numero}
        keyboardType="numeric"
      />
      <TextInput
        placeholder="Digite a cidade"
        onChangeText={setcidade}
        value={cidade}
      />
      <TextInput
        placeholder="Digite o estado"
        onChangeText={setestado}
        value={estado}
      />
      <TextInput
        placeholder="Digite o telefone"
        onChangeText={setTelefone}
        value={telefone}
        keyboardType="numeric"
      />
      <TextInput
        placeholder="Digite o email"
        onChangeText={setEmail}
        value={email}
        keyboardType="email-address"
      />
      <TextInput
        placeholder="Digite o responsável"
        onChangeText={setResponsavel}
        value={responsavel}
      />

      <TouchableOpacity style={styles.button} onPress={EscolaAcao}>
        <Text>{isUpdate ? "Salvar Alterações" : "Adicionar Escola"}</Text>
      </TouchableOpacity>

      {isUpdate && (
        <TouchableOpacity style={styles.button} onPress={clearInputs}>
          <Text>Cancelar Edição</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}
