package carsell.services;

import carsell.exceptions.UserFoundException;
import carsell.exceptions.IncorrectUserParamsException;

import carsell.exceptions.UserNotFoundException;
import carsell.models.User;
import carsell.repo.UserRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
public class UserService {
    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Transactional
    public User addUser(User user) {
        this.userIsExist(user.getUsername());
        return this.userRepository.save(user);
    }

    public User getUser (Long userId) {
        Optional<User> user = this.userRepository.findById(userId);
        if (user.isPresent()) {
            return user.get();
        } else {
            throw new UserNotFoundException(userId);
        }
    }

    public User login(User input) {
        Optional<User> user = this.userRepository.findByUsername(input.getUsername());
        if (user.isPresent()) {
            User userObj =  user.get();
            if (userObj.getUsername().equals(input.getUsername()) && userObj.getPassword().equals(input.getPassword())) {
                return userObj;
            } else {
                throw new IncorrectUserParamsException();
            }
        } else {
            throw new IncorrectUserParamsException();
        }
    }

    private void userIsExist(String username) {
        Optional<User> user = this.userRepository.findByUsername(username);
        if (user.isPresent()) {
            throw new UserFoundException(username);
        }
    }
}
