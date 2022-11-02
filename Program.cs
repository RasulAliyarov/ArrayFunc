int[] numbers = new int[] {1,2,3,4};

for (int i =0; i<numbers.Length; i++) //O(n+1)
{
    Console.Write(numbers[i]+", ");//O(n)
}

Console.WriteLine(" ");

for (int i = 0; i < numbers.Length; i++) //O(n+1)
{
    Console.Write(numbers[i]+1 + ", ");//O(n)
}